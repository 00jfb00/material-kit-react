import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const badges = [
  {
    id: faker.string.uuid(),
    title: 'Mestre Javascript',
    description: 'Concluiu a trilha de javasript',
    points: 50,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Mestre Python',
    description: 'Concluiu a trilha de Python',
    points: 50,
    icon: '/assets/images/badges/badge_2.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Mestre SQL',
    description: 'Concluiu a trilha de SQS',
    points: 50,
    icon: '/assets/images/badges/badge_3.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Mestre AWS',
    description: 'Concluiu a trilha de AWS',
    points: 50,
    icon: '/assets/images/badges/badge_4.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'The best of the best commiters',
    description: 'Fez mais de 5000 commits',
    points: 50,
    icon: '/assets/images/badges/badge_5.svg',
  },
];
