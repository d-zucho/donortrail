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
  return <SignIn />
}

  return <SignIn />
}