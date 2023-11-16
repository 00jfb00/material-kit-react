import { faker } from '@faker-js/faker';

export const averageDailyPoints = {
  labels: [
    '11/09/2023',
    '11/10/2023',
    '11/11/2023',
    '11/12/2023',
    '11/13/2023',
    '11/14/2023',
    '11/15/2023',
  ],
  series: [
    {
      name: 'Você',
      type: 'column',
      fill: 'solid',
      data: [
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
      ],
    },
    {
      name: 'Média Geral',
      type: 'area',
      fill: 'gradient',
      data: [
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
        faker.number.int({ min: 10, max: 70 }),
      ],
    },
  ],
};
