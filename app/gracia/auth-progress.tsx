'use client';

import { FormEvent, useEffect, useState } from 'react';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { getFirebaseClient } from '@/lib/firebase/client';

type ProgressStatus = 'started' | 'completed' | null;

function friendlyAuthError(error: unknown) {
  const code = typeof error === 'object' && error !== null && 'code' in error
    ? String(error.code)
    : '';

  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'Ese correo ya tiene una cuenta. Inicia sesión.',
    'auth/invalid-email': 'El correo electrónico no tiene un formato válido.',
    'auth/invalid-credential': 'El correo o la contraseña no son correctos.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    'auth/too-many-requests': 'Hubo demasiados intentos. Espera un momento e inténtalo otra vez.',
    'auth/network-request-failed': 'No se pudo conectar. Comprueba tu conexión e inténtalo de nuevo.',
  };

  return messages[code] ?? 'No se pudo completar la operación. Inténtalo de nuevo.';
}

export default function GraciaAuthProgress({ benefitCode }: { benefitCode: string }) {
  const [client, setClient] = useState<ReturnType<typeof getFirebaseClient> | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [profileReady, setProfileReady] = useState(false);
  const [progressStatus, setProgressStatus] = useState<ProgressStatus>(null);
  const [progressReady, setProgressReady] = useState(false);
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [authError, setAuthError] = useState('');
  const [progressError, setProgressError] = useState('');

  useEffect(() => {
    let active = true;
    let unsubscribe: (() => void) | undefined;

    try {
      const firebase = getFirebaseClient();
      setClient(firebase);

      setPersistence(firebase.auth, browserLocalPersistence)
        .then(() => {
          if (!active) return;
          unsubscribe = onAuthStateChanged(firebase.auth, async (nextUser) => {
            setUser(nextUser);
            setAuthReady(true);
            setProfileReady(false);
            setProgressStatus(null);
            setProgressReady(!nextUser);

            if (!nextUser) {
              setProfileReady(true);
              return;
            }

            try {
              const profileRef = doc(firebase.db, 'users', nextUser.uid);
              const profileSnapshot = await getDoc(profileRef);

              if (!profileSnapshot.exists()) {
                await setDoc(profileRef, {
                  uid: nextUser.uid,
                  email: nextUser.email ?? '',
                  displayName: nextUser.displayName ?? null,
                  createdAt: serverTimestamp(),
                  updatedAt: serverTimestamp(),
                  schemaVersion: 1,
                });
              }

              if (active) setProfileReady(true);
            } catch {
              if (active) {
                setAuthError('No se pudo preparar tu perfil. Verifica las reglas de Firestore.');
                setProfileReady(true);
              }
            }
          });
        })
        .catch(() => {
          if (active) {
            setAuthError('No se pudo iniciar la sesión persistente de Firebase.');
            setAuthReady(true);
          }
        });
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Firebase no está configurado.');
      setAuthReady(true);
    }

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (!client || !user) {
      setProgressStatus(null);
      setProgressReady(!user);
      return;
    }

    setProgressReady(false);
    const progressRef = doc(client.db, 'users', user.uid, 'progress', benefitCode);

    return onSnapshot(
      progressRef,
      (snapshot) => {
        const value = snapshot.exists() ? snapshot.data().status : null;
        setProgressStatus(value === 'started' || value === 'completed' ? value : null);
        setProgressReady(true);
        setProgressError('');
      },
      () => {
        setProgressError('No se pudo leer tu progreso. Comprueba las reglas de Firestore.');
        setProgressReady(true);
      },
    );
  }, [client, user, benefitCode]);

  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!client) return;

    setBusy(true);
    setAuthError('');

    try {
      if (mode === 'register') {
        const cleanName = displayName.trim();
        if (cleanName.length < 2 || cleanName.length > 80) {
          throw new Error('Escribe un nombre de entre 2 y 80 caracteres.');
        }

        const credential = await createUserWithEmailAndPassword(
          client.auth,
          email.trim(),
          password,
        );
        await updateProfile(credential.user, { displayName: cleanName });
        await setDoc(doc(client.db, 'users', credential.user.uid), {
          uid: credential.user.uid,
          email: credential.user.email ?? email.trim(),
          displayName: cleanName,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          schemaVersion: 1,
        });
      } else {
        await signInWithEmailAndPassword(client.auth, email.trim(), password);
      }

      setPassword('');
    } catch (error) {
      setAuthError(error instanceof Error && error.message.startsWith('Escribe ')
        ? error.message
        : friendlyAuthError(error));
    } finally {
      setBusy(false);
    }
  }

  async function handleSignOut() {
    if (!client) return;
    setBusy(true);
    setAuthError('');

    try {
      await signOut(client.auth);
      setProgressStatus(null);
    } catch {
      setAuthError('No se pudo cerrar la sesión. Inténtalo otra vez.');
    } finally {
      setBusy(false);
    }
  }

  async function saveProgress(status: Exclude<ProgressStatus, null>) {
    if (!client || !user) return;

    setBusy(true);
    setProgressError('');

    try {
      await setDoc(
        doc(client.db, 'users', user.uid, 'progress', benefitCode),
        {
          benefitCode,
          status,
          completedAt: status === 'completed' ? serverTimestamp() : null,
          lastViewedAt: serverTimestamp(),
          notes: null,
          schemaVersion: 1,
        },
        { merge: true },
      );
    } catch {
      setProgressError('No se pudo guardar el progreso. Verifica tu conexión y las reglas.');
    } finally {
      setBusy(false);
    }
  }

  if (!authReady) {
    return (
      <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-400">
        Preparando acceso seguro…
      </section>
    );
  }

  return (
    <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-white">Tu cuenta y tu progreso</h2>
        <p className="text-sm text-slate-400">
          Tu avance se guarda en tu cuenta y se recupera al volver a iniciar sesión.
        </p>
      </div>

      {user ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4">
            <div>
              <p className="font-semibold text-white">{user.displayName || 'Cuenta personal'}</p>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              disabled={busy}
              className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 disabled:opacity-50"
            >
              Cerrar sesión
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white">BENEFICIO-0624</p>
                <p className="text-xs text-slate-400">Estado de tu recorrido</p>
              </div>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                {!profileReady || !progressReady
                  ? 'Sincronizando…'
                  : progressStatus === 'completed'
                    ? 'Completado'
                    : progressStatus === 'started'
                      ? 'En progreso'
                      : 'Sin iniciar'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => saveProgress('started')}
                disabled={busy || !profileReady}
                className="rounded-xl border border-amber-500/40 px-4 py-2 text-xs font-semibold text-amber-200 disabled:opacity-50"
              >
                Marcar como iniciado
              </button>
              <button
                type="button"
                onClick={() => saveProgress('completed')}
                disabled={busy || !profileReady}
                className="rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 disabled:opacity-50"
              >
                Marcar como completado
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => { setMode('register'); setAuthError(''); }}
              className={`rounded-xl px-3 py-2 text-xs font-semibold ${mode === 'register' ? 'bg-amber-400 text-slate-950' : 'border border-slate-700 text-slate-300'}`}
            >
              Crear cuenta
            </button>
            <button
              type="button"
              onClick={() => { setMode('login'); setAuthError(''); }}
              className={`rounded-xl px-3 py-2 text-xs font-semibold ${mode === 'login' ? 'bg-amber-400 text-slate-950' : 'border border-slate-700 text-slate-300'}`}
            >
              Iniciar sesión
            </button>
          </div>

          <form onSubmit={submitAuth} className="grid gap-3 sm:grid-cols-2">
            {mode === 'register' && (
              <label className="space-y-1 text-xs text-slate-300 sm:col-span-2">
                Nombre
                <input
                  autoComplete="name"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  maxLength={80}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-amber-400"
                />
              </label>
            )}
            <label className="space-y-1 text-xs text-slate-300 sm:col-span-2">
              Correo electrónico
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              />
            </label>
            <label className="space-y-1 text-xs text-slate-300 sm:col-span-2">
              Contraseña
              <input
                type="password"
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              />
            </label>
            <button
              type="submit"
              disabled={busy || !client}
              className="rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 disabled:opacity-50 sm:col-span-2"
            >
              {busy ? 'Procesando…' : mode === 'register' ? 'Crear mi cuenta' : 'Entrar'}
            </button>
          </form>
        </div>
      )}

      {authError && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-950/30 p-3 text-sm text-red-200">
          {authError}
        </p>
      )}
      {progressError && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-950/30 p-3 text-sm text-red-200">
          {progressError}
        </p>
      )}
      {!client && (
        <p className="text-xs leading-5 text-amber-200">
          La interfaz está preparada, pero el proyecto Firebase y sus variables públicas todavía no están configurados para este Preview.
        </p>
      )}
    </section>
  );
}
