import { Helmet } from 'react-helmet-async';

import { HardSkillsView } from './view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Hard Skills | Dev Dash </title>
      </Helmet>

      <HardSkillsView />
    </>
  );
}
