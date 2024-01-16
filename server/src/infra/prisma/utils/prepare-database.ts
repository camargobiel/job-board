import { Prisma } from '@prisma/client';
import prisma from '..';
import { seedDatabase } from './seed-database';

export const prepareDatabase = async () => {
  if (process.env.NODE_ENV !== 'test') return;
  await Promise.all(
    Prisma.dmmf.datamodel.models.map(async (model) => {
      await prisma[model.name].deleteMany({});
    }),
  );
  return seedDatabase();
};
