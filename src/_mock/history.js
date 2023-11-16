import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const getDistribution = () => {
  const challenges = faker.number.int({ min: 0, max: 50 });
  const knowledge = faker.number.int({ min: 0, max: 100 - challenges });
  const badges = 100 - knowledge;

  return [
    { label: 'Desafios', value: challenges },
    { label: 'Conhecimentos', value: knowledge },
    { label: 'Badges', value: badges },
  ];
};

export const history = {
  pointsDistribution: getDistribution(),
  history: [
    {
      id: faker.string.uuid(),
      title: 'Hard Skill',
      type: 'knowledge-hard',
      points: 1,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'De tijolo em tijolo',
      type: 'challenge',
      points: 1,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'Mestre AWS',
      type: 'bagde',
      points: 50,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'Soft Skill',
      type: 'knowledge-soft',
      points: 1,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'De tijolo em tijolo',
      type: 'challenge',
      points: 1,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'Commitador assíduo',
      type: 'challenge',
      points: 5,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'De tijolo em tijolo',
      type: 'challenge',
      points: 1,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'Commitador assíduo',
      type: 'challenge',
      points: 5,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'De tijolo em tijolo',
      type: 'challenge',
      points: 1,
      createdAt: faker.date.past(),
    },
    {
      id: faker.string.uuid(),
      title: 'Commitador assíduo',
      type: 'challenge',
      points: 5,
      createdAt: faker.date.past(),
    },
  ],
};
