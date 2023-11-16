import { faker } from '@faker-js/faker';
import { badges } from './badges';
import { dailyChallenges } from './dailyChallenges';

// ----------------------------------------------------------------------

const getProgress = (max) => {
  const done = faker.number.int({ min: 0, max });
  return {
    done,
    total: max,
    percentage: Math.round((done / max) * 100),
  };
};

export const performance = {
  points: faker.number.int({ min: 0, max: 500 }),
  rank: faker.number.int({ min: 0, max: 100 }),
  progress: {
    hardSkills: {
      label: 'Hard Skills',
      details: getProgress(300),
    },
    softSkillsJunior: {
      label: 'Soft Skills Junior',
      details: getProgress(30),
    },
    softSkillsPleno: {
      label: 'Soft Skills Pleno',
      details: getProgress(35),
    },
    softSkillsSenior: {
      label: 'Soft Skills Senior',
      details: getProgress(40),
    },
    softSkillsEspecialista: {
      label: 'Soft Skills Especialista',
      details: getProgress(45),
    },
  },
  badges: badges.slice(0, 2).map((badge) => {
    badge.conqueredAt = faker.date.past();
    return badge;
  }),
  challenges: [
    {
      id: faker.string.uuid(),
      title: 'Bora perder a timidez!',
      type: 'Regular',
      description: 'Faça uma apresentação no chapter-backend sobre um assunto que você domina',
      progress: 0,
      done: faker.datatype.boolean(),
      points: 30,
      icon: '/assets/images/badges/badge_3.svg',
    },
    ...dailyChallenges.map((challenge) => {
      const progress = faker.number.int({ min: 0, max: 100 });
      challenge.progress = progress;
      challenge.done = progress === 100;
      return challenge;
    }),
  ],
};
