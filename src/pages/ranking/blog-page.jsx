import { Helmet } from 'react-helmet-async';

import { BlogView } from './view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Dev Dash </title>
      </Helmet>

      <BlogView />
    </>
  );
}
