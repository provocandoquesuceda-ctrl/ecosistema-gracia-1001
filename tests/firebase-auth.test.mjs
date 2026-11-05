import { after, before, it } from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { initializeApp, deleteApp } from 'firebase/app';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  initializeAuth,
  inMemoryPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  connectFirestoreEmulator,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

const projectId = 'gracia-os-preview-rules-test';
const app = initializeApp({
  apiKey: 'demo-api-key',
  authDomain: 'localhost',
  projectId,
  appId: 'demo-app-id',
}, 'gracia-auth-emulator-test');
const auth = initializeAuth(app, { persistence: inMemoryPersistence });
const db = getFirestore(app);

connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
connectFirestoreEmulator(db, '127.0.0.1', 8080);

after(async () => {
  await signOut(auth);
  await deleteApp(app);
});

it('registers, signs in, signs out, persists profile/progress, and isolates two users', async () => {
  const suffix = randomUUID();
  const emailA = `user-a-${suffix}@example.test`;
  const emailB = `user-b-${suffix}@example.test`;
  const password = 'Preview-Test-Password-123';

  const accountA = await createUserWithEmailAndPassword(auth, emailA, password);
  const uidA = accountA.user.uid;

  await setDoc(doc(db, 'users', uidA), {
    uid: uidA,
    email: emailA,
    displayName: 'Usuario A',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    schemaVersion: 1,
  });

  await setDoc(doc(db, 'users', uidA, 'progress', 'BENEFICIO-0624'), {
    benefitCode: 'BENEFICIO-0624',
    status: 'completed',
    completedAt: serverTimestamp(),
    lastViewedAt: serverTimestamp(),
    notes: null,
    schemaVersion: 1,
  });

  await signOut(auth);
  assert.equal(auth.currentUser, null);

  const loginA = await signInWithEmailAndPassword(auth, emailA, password);
  assert.equal(loginA.user.uid, uidA);

  const profileA = await getDoc(doc(db, 'users', uidA));
  const progressA = await getDoc(doc(db, 'users', uidA, 'progress', 'BENEFICIO-0624'));
  assert.equal(profileA.data()?.email, emailA);
  assert.equal(progressA.data()?.status, 'completed');

  await signOut(auth);
  const accountB = await createUserWithEmailAndPassword(auth, emailB, password);
  const uidB = accountB.user.uid;
  assert.notEqual(uidA, uidB);

  await assert.rejects(
    getDoc(doc(db, 'users', uidA)),
    (error) => error?.code === 'permission-denied',
  );
  await assert.rejects(
    setDoc(doc(db, 'users', uidA, 'progress', 'BENEFICIO-0624'), {
      benefitCode: 'BENEFICIO-0624',
      status: 'started',
      completedAt: null,
      lastViewedAt: serverTimestamp(),
      notes: null,
      schemaVersion: 1,
    }),
    (error) => error?.code === 'permission-denied',
  );

  await signOut(auth);
  assert.equal(auth.currentUser, null);
});
