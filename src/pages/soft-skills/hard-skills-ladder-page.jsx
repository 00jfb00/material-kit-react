import { Helmet } from 'react-helmet-async';
import { ReactFlowProvider } from 'reactflow';

import { HardSkillsLadderView } from './view';

// ----------------------------------------------------------------------

export default function HardSkillsPage() {
  return (
    <>
      <Helmet>
        <title> Hard Skills | Dev Dash </title>
      </Helmet>

      <ReactFlowProvider>
        <HardSkillsLadderView />
      </ReactFlowProvider>
    </>
  );
}
