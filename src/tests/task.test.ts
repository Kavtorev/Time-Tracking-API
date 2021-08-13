import { Connection, SelectQueryBuilder } from "typeorm";
import { Application } from "express";
import request from "supertest";
import { initializeApplication } from "../app";
import { Task } from "../entity/Task";
import { getTaskQueryBuilder } from "../repository/task.repo";
import { establishMockDbConnection } from "../db";

describe("Testing user stories", () => {
  let connection: Connection;
  let app: Application;
  let taskQueryBuilder: SelectQueryBuilder<Task>;

  const createMockRunningTask = async () =>
    await connection.getRepository(Task).save(new Task("mock_task"));

  beforeAll(async () => {
    connection = await establishMockDbConnection();
    app = initializeApplication();
    taskQueryBuilder = getTaskQueryBuilder();
  });

  afterEach(
    async () =>
      await taskQueryBuilder
        .delete()
        .where("task.id > :id", { id: 0 })
        .execute()
  );

  it("should start tracking a new named task & and stop previously started task & and save start time of a new task", async () => {
    const previouslyRunningTask = await createMockRunningTask();

    await request(app)
      .post("/api/tasks/current")
      .send({ name: "new_task" })
      .expect("location", "/tasks/current")
      .expect(201);

    const [entities, number] = await taskQueryBuilder
      .where("task.isRunning = :isRunning", { isRunning: true })
      .getManyAndCount();

    expect(number).toBe(1);
    expect(entities[0].startedAt).not.toBeNull();
    expect(entities[0].isRunning).toBeTruthy();
    expect(entities[0].finishedAt).toBeNull();
    expect(previouslyRunningTask.id).not.toBe(entities[0].id);
  });

  it("should stop tracking a current task & and save finish time", async () => {
    const { id } = await createMockRunningTask();
    await request(app).put("/api/tasks/current").expect(200);

    const finishedTask = await taskQueryBuilder
      .where("task.id = :id", { id })
      .getOne();
    expect(finishedTask?.isRunning).not.toBeTruthy();
    expect(finishedTask?.finishedAt).not.toBeNull();
  });

  afterAll(async () => {
    await connection.close();
  });
});
