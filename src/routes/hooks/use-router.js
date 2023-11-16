import { useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter() {
  const navigate = useNavigate();
  const params = useParams();

  const updateParams = useCallback(
    (path) => {
      let url = path;
      if (!path) {
        return url;
      }
      Object.keys(params).forEach((key) => {
        url = url.replace(`:${key}`, params[key]);
      });
      return url;
    },
    [params]
  );

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href, options = {}) => navigate(updateParams(href), options),
      replace: (href, options = {}) => navigate(updateParams(href), { ...options, replace: true }),
      getRoutePathname: (href) => updateParams(href),
    }),
    [navigate, updateParams]
  );

  return router;
}
