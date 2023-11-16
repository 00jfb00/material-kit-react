import { Helmet } from 'react-helmet-async';

import { HardSkillsView } from './view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Dev Dash </title>
      </Helmet>

      <HardSkillsView />
    </>
  );
}
