import { Helmet } from 'react-helmet-async';

import { SoftSkillsView } from './view';

// ----------------------------------------------------------------------

export default function SoftSkillsPage() {
  return (
    <>
      <Helmet>
        <title> Soft Skills | Dev Dash </title>
      </Helmet>

      <SoftSkillsView />
    </>
  );
}
