import { Helmet } from 'react-helmet-async';

import { UserView } from './view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Users | Dev Dash </title>
      </Helmet>

      <UserView />
    </>
  );
}
