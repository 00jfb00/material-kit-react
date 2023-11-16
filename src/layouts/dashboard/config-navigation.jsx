import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/:user/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'badges',
    path: '/:user/badges',
    icon: icon('ic_cart'),
  },
  {
    title: 'desafios',
    path: '/:user/challenges',
    icon: icon('ic_cart'),
  },
  {
    title: 'tarefas',
    path: '/:user/tasks',
    icon: icon('ic_cart'),
  },
  {
    title: 'hard-skills',
    path: '/:user/hard-skills',
    icon: icon('ic_blog'),
  },
  {
    title: 'soft-skills',
    path: '/:user/soft-skills',
    icon: icon('ic_blog'),
  },
  {
    title: 'ranking',
    path: '/:user/ranking',
    icon: icon('ic_cart'),
  },
  {
    title: 'histórico de pontuação',
    path: '/:user/points-history',
    icon: icon('ic_analytics'),
  },
  {
    title: 'produtos',
    path: '/:user/products',
    icon: icon('ic_blog'),
  },
  {
    title: 'informações',
    path: '/:user/infos',
    icon: icon('ic_cart'),
  },
  {
    title: 'usuários',
    path: '/:user/users',
    icon: icon('ic_user'),
    needsAdmin: true,
  },
];

export default navConfig;
