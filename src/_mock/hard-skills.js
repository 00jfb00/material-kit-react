/* eslint-disable no-nested-ternary */
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const getLadders = (id, name) => {
  const totalKnowledges = faker.number.int({ min: 200, max: 300 });
  const acquiredKnowledges =
    id === 'ios'
      ? 0
      : id === 'ux'
      ? totalKnowledges
      : faker.number.int({ min: totalKnowledges - 200, max: 200 });
  const availableKnowledges = totalKnowledges - acquiredKnowledges;
  return {
    id,
    cover: `/assets/images/products/product_${faker.number.int({ min: 1, max: 10 })}.jpg`,
    name,
    totalKnowledges,
    acquiredKnowledges,
    availableKnowledges,
    progress: (acquiredKnowledges / totalKnowledges) * 100,
    status: acquiredKnowledges === totalKnowledges ? 'Concluída' : 'Em andamento',
  };
};

export const ladders = [
  getLadders('backend', 'Backend Development'),
  getLadders('frontend', 'Frontend Development'),
  getLadders('android', 'Android Development'),
  getLadders('ios', 'iOS Development'),
  getLadders('data-science', 'Data Science'),
  getLadders('ux', 'UI / UX Design'),
  getLadders('devops', 'DevOps'),
];
