import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
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
      location: 'app/(auth)/sign-up/[[...sign-up]]/page.tsx:SignUpPage',
      message: 'Rendered Clerk SignUp page route handler',
      data: {},
      timestamp: Date.now(),
    }),
  }).catch(() => {})
  // #endregion

  return <SignUp />
}

export default SignUpPage