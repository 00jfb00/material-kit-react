import { Helmet } from 'react-helmet-async';

import { AppView } from './view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dev Dash </title>
      </Helmet>

      <AppView />
    </>
  );
}
