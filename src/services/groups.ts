import { PrismaClient } from "@prisma/client";
import { type } from "os";

const Prisma = new PrismaClient();

export const getAll = async (id_event: number) => {
  try {
    return await Prisma.eventGroup.findMany({ where: { id_event } });
  } catch (err) {
    return false;
  }
};

type GetOneFilters = { id: number; id_event?: number };
export const getOne = async (filters: GetOneFilters) => {
  try {
    return await Prisma.eventGroup.findFirst({ where: filters });
  } catch (err) {
    return false;
  }
};
