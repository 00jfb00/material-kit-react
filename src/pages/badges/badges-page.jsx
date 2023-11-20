import { Helmet } from 'react-helmet-async';

import { BadgesView } from './view';

// ----------------------------------------------------------------------

export default function BadgesPage() {
  return (
    <>
      <Helmet>
        <title> Badges | Dev Dash </title>
      </Helmet>

      <BadgesView />
    </>
  );
}
