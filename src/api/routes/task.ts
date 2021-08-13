import { Router, Request, Response } from "express";
import { catchAsync } from "../../utils";
import { Task } from "../../entity/Task";
import {
  getTaskQueryBuilder,
  getTaskRepository,
} from "../../repository/task.repo";
const router = Router();

async function finishTask() {
  return await getTaskQueryBuilder()
    .update(Task)
    .set({ isRunning: false, finishedAt: new Date() })
    .where("isRunning = :isRunning", { isRunning: true })
    .execute();
}

router.get(
  "/tasks/current",
  catchAsync(async (req: Request, res: Response) => {
    const runningTask = await getTaskQueryBuilder()
      .where("task.isRunning = :isRunning", { isRunning: true })
      .getOne();

    if (!runningTask) {
      res.sendStatus(400);
    }

    res.json(runningTask);
  })
);

router.put(
  "/tasks/current",
  catchAsync(async (req: Request, res: Response) => {
    const { affected } = await finishTask();
    if (!affected) {
      res.sendStatus(400);
      return;
    }
    res.sendStatus(200);
  })
);

router.post(
  "/tasks/current",
  catchAsync(async (req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: "Invalid task name" });
      return;
    }

    await finishTask();
    await getTaskRepository().save(new Task(name));

    res.location("/tasks/current").sendStatus(201);
  })
);

export default router;
