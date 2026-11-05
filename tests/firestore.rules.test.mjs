import { readFile } from 'node:fs/promises';
import { after, before, beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

const projectId = 'gracia-os-preview-rules-test';
let testEnv;

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId,
    firestore: {
      rules: await readFile(new URL('../firestore.rules', import.meta.url), 'utf8'),
    },
  });
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

after(async () => {
  await testEnv.cleanup();
});

function profile(uid, email = uid + '@example.test') {
  return {
    uid,
    email,
    displayName: 'Test User',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    schemaVersion: 1,
  };
}

function progress(benefitCode = 'BENEFICIO-0624') {
  return {
    benefitCode,
    status: 'started',
    completedAt: null,
    lastViewedAt: serverTimestamp(),
    notes: null,
    schemaVersion: 1,
  };
}

describe('Firestore ownership rules', () => {
  it('allows a user to create and read only their own profile', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore();
    const ref = doc(db, 'users/user-a');
    await assertSucceeds(setDoc(ref, profile('user-a')));
    await assertSucceeds(getDoc(ref));
  });

  it('denies unauthenticated profile reads and writes', async () => {
    const db = testEnv.unauthenticatedContext().firestore();
    await assertFails(getDoc(doc(db, 'users/user-a')));
    await assertFails(setDoc(doc(db, 'users/user-a'), profile('user-a')));
  });

  it('denies cross-user profile and progress access', async () => {
    const dbA = testEnv.authenticatedContext('user-a').firestore();
    await assertFails(getDoc(doc(dbA, 'users/user-b')));
    await assertFails(setDoc(
      doc(dbA, 'users/user-b/progress/BENEFICIO-0624'),
      progress(),
    ));
  });

  it('allows own progress persistence and rejects forged UID paths', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore();
    await assertSucceeds(setDoc(doc(db, 'users/user-a'), profile('user-a')));
    await assertSucceeds(setDoc(
      doc(db, 'users/user-a/progress/BENEFICIO-0624'),
      progress(),
    ));
    await assertSucceeds(getDoc(doc(db, 'users/user-a/progress/BENEFICIO-0624')));
    await assertFails(setDoc(
      doc(db, 'users/user-b/progress/BENEFICIO-0624'),
      progress(),
    ));
  });

  it('rejects forged identity, unsupported fields and oversized notes', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore();
    await assertFails(setDoc(doc(db, 'users/user-a'), profile('user-b')));
    await assertFails(setDoc(doc(db, 'users/user-a'), {
      ...profile('user-a'),
      role: 'admin',
    }));
    await assertFails(setDoc(
      doc(db, 'users/user-a/progress/BENEFICIO-0624'),
      { ...progress(), notes: 'x'.repeat(501) },
    ));
  });

  it('prevents profile deletion and allows only owner progress deletion', async () => {
    const db = testEnv.authenticatedContext('user-a').firestore();
    await assertSucceeds(setDoc(doc(db, 'users/user-a'), profile('user-a')));
    await assertFails(deleteDoc(doc(db, 'users/user-a')));
    await assertSucceeds(setDoc(
      doc(db, 'users/user-a/progress/BENEFICIO-0624'),
      progress(),
    ));
    await assertSucceeds(deleteDoc(
      doc(db, 'users/user-a/progress/BENEFICIO-0624'),
    ));
  });
});
