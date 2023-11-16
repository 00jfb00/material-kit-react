import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const tasks = [
  {
    id: faker.string.uuid(),
    name: faker.git.commitMessage(),
    completed: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    completedAt: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    name: faker.git.commitMessage(),
    completed: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    completedAt: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    name: faker.git.commitMessage(),
    completed: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    completedAt: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    name: faker.git.commitMessage(),
    completed: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    completedAt: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    name: faker.git.commitMessage(),
    completed: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    completedAt: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    name: faker.git.commitMessage(),
    completed: faker.datatype.boolean(),
    createdAt: faker.date.past(),
    completedAt: faker.date.past(),
  },
]