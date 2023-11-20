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

const generateProgress = () => {
  const progress = {
    hardSkillsBackend: {
      label: 'Hard Skills - Backend',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkillsFrontend: {
      label: 'Hard Skills - Frontend',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkillsAndroid: {
      label: 'Hard Skills - Android',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkillsIOS: {
      label: 'Hard Skills - IOS',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkillsUX: {
      label: 'Hard Skills - UX',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkillsData: {
      label: 'Hard Skills - Data Science',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkillsDevops: {
      label: 'Hard Skills - Backend',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    hardSkills: {
      label: 'Hard Skills',
      details: getProgress(300),
      total: faker.number.int({ min: 0, max: 300 }),
    },
    softSkillsJunior: {
      label: 'Soft Skills - Junior',
      details: getProgress(30),
      total: faker.number.int({ min: 0, max: 30 }),
    },
    softSkillsPleno: {
      label: 'Soft Skills - Pleno',
      details: getProgress(35),
      total: faker.number.int({ min: 0, max: 35 }),
    },
    softSkillsSenior: {
      label: 'Soft Skills - Senior',
      details: getProgress(40),
      total: faker.number.int({ min: 0, max: 40 }),
    },
    softSkillsEspecialista: {
      label: 'Soft Skills - Especialista',
      details: getProgress(45),
      total: faker.number.int({ min: 0, max: 45 }),
    },
  };
  const softKeys = Object.keys(progress).filter((key) => key.includes('softSkills'));
  const hardKeys = Object.keys(progress).filter((key) => key.includes('hardSkills'));
  const softSkills = softKeys.reduce((acc, key) => acc + progress[key].total, 0);
  const hardSkills = hardKeys.reduce((acc, key) => acc + progress[key].total, 0);
  return {
    softSkills,
    hardSkills,
    details: progress,
  };
};

export const performance = {
  points: faker.number.int({ min: 0, max: 500 }),
  rank: faker.number.int({ min: 0, max: 100 }),
  progress: generateProgress(),
  badges: badges.slice(0, 2).map((badge) => {
    badge.acquired = true;
    badge.conqueredAt = faker.date.past();
    return badge;
  }),
  challenges: [
    {
      id: faker.string.uuid(),
      title: 'Bora perder a timidez!',
      type: 'Regular',
      description: 'Faça uma apresentação no chapter-backend sobre um assunto que você domina',
      progress: faker.number.int({ min: 0, max: 99 }),
      done: false,
      points: 30,
      cover: `/assets/images/covers/cover_${faker.number.int({ min: 2, max: 5 })}.jpg`,
    },
    ...dailyChallenges.map((challenge, index) => {
      const progress = index === 0 ? 100 : faker.number.int({ min: 0, max: 100 });
      challenge.progress = progress;
      challenge.done = progress === 100;
      challenge.conqueredAt = faker.date.past();
      return challenge;
    }),
  ],
};
