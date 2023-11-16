import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const dailyChallenges = [
  {
    id: faker.string.uuid(),
    title: 'De tijolo em tijolo',
    type: 'Diário',
    description: 'Conclua 1 item de conhecimento',
    points: 1,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'A base de tudo é o conhecimento',
    type: 'Diário',
    description: 'Conclua 10 itens de conhecimento',
    points: 12,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Evolução contínua',
    type: 'Diário',
    description: 'Conclua 1 trilha de conhecimento',
    points: 15,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Commitador assíduo',
    type: 'Diário',
    description: 'Faça 1 commit hoje',
    points: 5,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Padawan dos commits',
    type: 'Diário',
    description: 'Faça 5 commits hoje',
    points: 10,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Jedi dos commits',
    type: 'Diário',
    description: 'Faça 10 commits hoje',
    points: 15,
    icon: '/assets/images/badges/badge_1.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Esse entrega valor!',
    type: 'Diário',
    description: 'Conclua 1 história de usuário ou enabler',
    points: 10,
    icon: '/assets/images/badges/badge_2.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Aquele amado pelos PMs',
    type: 'Diário',
    description: 'Conclua 3 história de usuário ou enabler',
    points: 40,
    icon: '/assets/images/badges/badge_2.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Matador de débitos técnicos',
    type: 'Diário',
    description: 'Conclua 1 débito técnico',
    points: 10,
    icon: '/assets/images/badges/badge_2.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'O denguinho do TL',
    type: 'Diário',
    description: 'Conclua 3 débitos técnicos',
    points: 40,
    icon: '/assets/images/badges/badge_2.svg',
  },
  {
    id: faker.string.uuid(),
    title: 'Matador de desafios',
    type: 'Diário',
    description: 'Conclua todos os desafios diários do dia',
    points: 20,
    icon: '/assets/images/badges/badge_2.svg',
  },
];
