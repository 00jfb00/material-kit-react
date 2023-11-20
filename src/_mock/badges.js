import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const badges = [
  {
    id: faker.string.uuid(),
    title: 'Mestre Javascript',
    description: 'Concluiu a trilha de javasript',
    points: 50,
    cover: '/assets/images/covers/cover_1.jpg',
  },
  {
    id: faker.string.uuid(),
    title: 'Mestre Python',
    description: 'Concluiu a trilha de Python',
    points: 50,
    cover: '/assets/images/covers/cover_2.jpg',
  },
  {
    id: faker.string.uuid(),
    title: 'Mestre SQL',
    description: 'Concluiu a trilha de SQS',
    points: 50,
    cover: '/assets/images/covers/cover_3.jpg',
  },
  {
    id: faker.string.uuid(),
    title: 'Mestre AWS',
    description: 'Concluiu a trilha de AWS',
    points: 50,
    cover: '/assets/images/covers/cover_4.jpg',
  },
  {
    id: faker.string.uuid(),
    title: 'The best of the best commiters',
    description: 'Fez mais de 5000 commits',
    points: 50,
    cover: '/assets/images/covers/cover_5.jpg',
  },
];
