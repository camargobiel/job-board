import { Prisma } from '@prisma/client';
import prisma from '..';

export const deleteAllDatabaseRows = async () => {
  if (process.env.NODE_ENV !== 'test') return;

  const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);
  for (const modelName of modelNames) {
    await prisma[modelName].deleteMany({});
  }
};
