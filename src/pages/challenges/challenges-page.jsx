import { Helmet } from 'react-helmet-async';

import { ChallengesView } from './view';

// ----------------------------------------------------------------------

export default function ChallengesPage() {
  return (
    <>
      <Helmet>
        <title> Desafios | Dev Dash </title>
      </Helmet>

      <ChallengesView />
    </>
  );
}
