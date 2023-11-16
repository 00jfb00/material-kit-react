import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const account = {
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_25.jpg`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: 'Backend Developer',
  level: 'Pleno II',
  team: 'Plataforma',
  isAdmin: true,
};
