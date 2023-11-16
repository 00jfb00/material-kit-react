import { Helmet } from 'react-helmet-async';

import { LoginView } from './view';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Dev Dash </title>
      </Helmet>

      <LoginView />
    </>
  );
}
