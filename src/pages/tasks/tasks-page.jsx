import { Helmet } from 'react-helmet-async';

import { TasksView } from './view';

// ----------------------------------------------------------------------

export default function TasksPage() {
  return (
    <>
      <Helmet>
        <title> Tasks | Dev Dash </title>
      </Helmet>

      <TasksView />
    </>
  );
}
