import { SignIn } from '@clerk/nextjs'

/**
 * Render the Clerk SignIn UI for the route and report a diagnostic event to a local ingest endpoint.
 *
 * This component sends a JSON diagnostic POST to http://127.0.0.1:7302/ingest/... containing session, run,
 * hypothesis, location, message, and timestamp. Network errors from that request are ignored.
 *
 * @returns A JSX element that renders the Clerk SignIn UI.
 */
export default function SignInPage() {
  // #region agent log
  fetch('http://127.0.0.1:7302/ingest/e8861fcc-1294-42d7-a788-e73e7f09fd62', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': '5159fe',
    },
    body: JSON.stringify({
      sessionId: '5159fe',
      runId: 'pre-debug',
      hypothesisId: 'H1_optional_catchall_routes',
      location: 'app/(auth)/sign-in/[[...sign-in]]/page.tsx:SignInPage',
      message: 'Rendered Clerk SignIn page route handler',
      data: {},
      timestamp: Date.now(),
    }),
  }).catch(() => {})
  // #endregion

  return <SignIn />
}