import { Helmet } from 'react-helmet-async';

import { PointsHistoryView } from './view';

// ----------------------------------------------------------------------

export default function PointsHistoryPage() {
  return (
    <>
      <Helmet>
        <title> Histórico de pontuaçõex | Dev Dash </title>
      </Helmet>

      <PointsHistoryView />
    </>
  );
}
