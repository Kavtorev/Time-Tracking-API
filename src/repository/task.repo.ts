import { getConnection } from "typeorm";
import { Task } from "../entity/Task";

export const getTaskRepository = () => getConnection().getRepository(Task);
export const getTaskQueryBuilder = () =>
  getTaskRepository().createQueryBuilder("task");
