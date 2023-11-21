import { Helmet } from 'react-helmet-async';

import { MovingMotivatorsView } from './view';

// ----------------------------------------------------------------------

export default function MovingMotivatorsPage() {
  return (
    <>
      <Helmet>
        <title> Moving Motivators | Dev Dash </title>
      </Helmet>

      <MovingMotivatorsView />
    </>
  );
}
