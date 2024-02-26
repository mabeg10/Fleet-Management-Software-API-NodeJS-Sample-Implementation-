import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const queryTaxis = async (startIndex: number, limit: number, plate?: string) => {
  const condition = {
    skip: startIndex,
    take: limit,
    where: {
      plate: {
        contains: plate,
      }
    }
  };

  return await prisma.taxi.findMany(condition);
};