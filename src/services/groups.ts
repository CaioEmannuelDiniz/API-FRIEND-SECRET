import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const getAll = async (id_event: number) => {
  try {
    return await Prisma.eventGroup.findMany({ where: { id_event } });
  } catch (err) {
    return false;
  }
};
