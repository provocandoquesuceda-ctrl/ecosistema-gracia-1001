# GRACIA OS — Firebase Preview Architecture v1

Status: proposed implementation baseline for `feature/gracia-os-firebase-preview`.
Scope: isolated Preview only. No production migration or Supabase mutation.

## 1. Findings from repository inspection

- Next.js 16.2.12 / React 19.2.4.
- The current `/gracia` page reads the public benefit `BENEFICIO-0624` from `GET /api/gracia/beneficios/[codigo]` and submits semantic searches to `POST /api/gracia/search`.
- These API routes use Supabase's public/anon key. The search route calls the `buscar_beneficios` RPC.
- `/api/devocional` also calls OpenAI and the Supabase semantic-search RPC.
- `/api/gracia/bootstrap-embedding` is a privileged data operation guarded by `GRACIA_BOOTSTRAP_TOKEN`.
- The checked-in `.env.example` lists Supabase URL/anon key, OpenAI API key and bootstrap token.
- No Firebase SDK, Firebase Auth UI, profile collection, user progress collection, or `localStorage` persistence was found in the searched paths.

## 2. Responsibility boundary

Keep the existing Supabase corpus and semantic-search pipeline unchanged in this first Preview milestone. Firebase is introduced only for Preview identity and user-owned data:

- Firebase Authentication: email/password sign-up, sign-in, sign-out, current-user session.
- Cloud Firestore: user profile and per-user progress.
- Supabase: read-only public benefit catalog and existing semantic search during this milestone.
- OpenAI: server-side only; no API key in browser bundles.
- Vercel: deploy the dedicated branch to Preview; Firebase config variables scoped only to this branch and Preview target.

This boundary avoids copying or migrating the canonical knowledge corpus before it is separately audited.

## 3. Firestore data model

### `users/{uid}`

Fields:
- `uid: string` — must equal document ID and Firebase Auth UID.
- `email: string` — copied from authenticated Firebase user; not an authorization claim.
- `displayName: string | null`
- `createdAt: timestamp`
- `updatedAt: timestamp`
- `schemaVersion: 1`

### `users/{uid}/progress/{benefitCode}`

Fields:
- `benefitCode: string` — e.g. `BENEFICIO-0624`.
- `status: "started" | "completed"`
- `completedAt: timestamp | null`
- `lastViewedAt: timestamp`
- `notes: string | null` — optional, bounded length; do not store sensitive pastoral/medical details in this MVP.
- `schemaVersion: 1`

Do not store passwords, ID tokens, refresh tokens, API keys, or privileged role flags in Firestore profile documents. Administrative roles must not be derived from user-editable profile fields.

## 4. Firestore Security Rules baseline

Rules must deny all access by default. A signed-in user may read/write only their own `users/{uid}` document and descendants when `request.auth.uid == uid`. Validate allowed field names, types, immutable UID, and bounded string lengths. Client writes may not set `createdAt` on updates or change `uid`; server timestamps should be used for timestamps. No public list/read of user documents. No cross-user queries.

The concrete rules file must be tested in the Firebase Emulator Suite before any hosted Preview deployment.

## 5. Authentication flow

1. Sign-up with email/password using Firebase Auth.
2. Create the matching `users/{uid}` profile using the authenticated UID.
3. Sign-in; restore auth state on reload.
4. Sign-out; clear protected UI state.
5. Every profile/progress read and write must use the authenticated UID path.
6. Handle duplicate email, invalid credentials, weak password, network errors, and deleted/disabled user states without exposing secrets.

Do not enable public admin registration. Do not grant privileges from `displayName`, email text, or user-editable metadata.

## 6. Environment variables

Only Preview branch `feature/gracia-os-firebase-preview`:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Firebase web configuration is not an authorization secret; Firestore Rules and Auth are the security boundary. Never add service-account JSON or Admin SDK private keys to `NEXT_PUBLIC_*` variables or browser code. If Admin SDK is later needed, credentials remain server-only and require a separate security review.

Existing Supabase/OpenAI variables are not copied or broadened. No production environment variables are edited by this specification.

## 7. Required tests / acceptance gates

Use Firebase Emulator Suite and at least two independent test accounts (User A and User B).

Positive:
- A can register, sign in, read/update own profile, create/update own progress, reload and see persisted progress.
- B can do the same for B.
- Sign-out removes authenticated access from the UI.

Negative:
- Unauthenticated client cannot read/write profile or progress.
- A cannot read/write B's profile or progress, including direct document paths.
- A cannot forge another UID, alter immutable identity, or write unsupported fields.
- Public registration cannot assign administrative privileges.
- Invalid/oversized progress payloads are rejected.

Operational:
- Build, lint, TypeScript checks pass.
- Emulator rules tests pass.
- Preview deployment is linked to the dedicated branch and has only branch-scoped Firebase config.
- Confirm production environment variables and production deployments remain unchanged.

## 8. Explicit exclusions

- No change to `main`.
- No production deployment, DNS/domain change, or production variable edit.
- No Supabase schema/data changes, pause, deletion, or migration.
- No migration of the canonical benefits corpus or vector embeddings to Firestore.
- No paid Firebase plan or billing account change.
- No public admin account creation.
