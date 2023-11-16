import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  points: faker.number.int({ min: 0, max: 500 }),
  status: sample(['ativo', 'inativo']),
  role: sample([
    'Backend Developer',
    'Front End Developer',
    'Android Developer',
    'IOS Developer',
    'Full Stack Developer',
  ]),
  level: sample([
    'Júnior I',
    'Júnior II',
    'Júnior III',
    'Pleno I',
    'Pleno II',
    'Pleno III',
    'Sênior I',
    'Sênior II',
    'Sênior III',
  ]),
}));
