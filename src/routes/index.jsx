import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/home/home-page'));
export const BadgesPage = lazy(() => import('src/pages/badges/badges-page'));
export const RankingPage = lazy(() => import('src/pages/ranking/blog-page'));
export const TasksPage = lazy(() => import('src/pages/tasks/tasks-page'));
export const PointsHistoryPage = lazy(() => import('src/pages/points-history/points-history-page'));
export const ProductsPage = lazy(() => import('src/pages/products/blog-page'));
export const InfosPage = lazy(() => import('src/pages/infos/blog-page'));
export const ChallengesPage = lazy(() => import('src/pages/challenges/challenges-page'));
export const HardSkillsPage = lazy(() => import('src/pages/hard-skills/hard-skills-page'));
export const HardSkillsLadderPage = lazy(() =>
  import('src/pages/hard-skills/hard-skills-ladder-page')
);
export const SoftSkillsPage = lazy(() => import('src/pages/soft-skills/soft-skills-page'));
export const SoftSkillsLadderPage = lazy(() =>
  import('src/pages/soft-skills/hard-skills-ladder-page')
);
export const UsersPage = lazy(() => import('src/pages/users/users-page'));
export const MovingMotivatorsPage = lazy(() => import('src/pages/moving-motivators/moving-motivators-page'));
export const LoginPage = lazy(() => import('src/pages/login/login-page'));
// export const ProductsPage = lazy(() => import('src/pages/_badges/product-page'));
export const Page404 = lazy(() => import('src/pages//shared/not-found-page'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '/:user', element: <IndexPage /> },
        { path: '/:user/users', element: <UsersPage /> },
        { path: '/:user/products', element: <ProductsPage /> },
        { path: '/:user/infos', element: <InfosPage /> },
        { path: '/:user/badges', element: <BadgesPage /> },
        { path: '/:user/tasks', element: <TasksPage /> },
        { path: '/:user/tasks', element: <TasksPage /> },
        { path: '/:user/moving-motivators', element: <MovingMotivatorsPage /> },
        { path: '/:user/challenges', element: <ChallengesPage /> },
        { path: '/:user/points-history', element: <PointsHistoryPage /> },
        { path: '/:user/ranking', element: <RankingPage /> },
        { path: '/:user/hard-skills', element: <HardSkillsPage /> },
        { path: '/:user/hard-skills/:ladder', element: <HardSkillsLadderPage /> },
        { path: '/:user/soft-skills', element: <SoftSkillsPage /> },
        { path: '/:user/soft-skills/:ladder', element: <SoftSkillsPage /> },
        {
          path: '/',
          element: <Navigate to="/me/" replace />,
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
