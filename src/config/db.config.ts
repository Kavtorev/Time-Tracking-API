import path from "path";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const {
  NAME = "",
  PASSWORD = "",
  HOST = "localhost",
  DB_NAME = "",
  TEST_NAME = "postgres",
  TEST_PASSWORD = "test",
  TEST_HOST = "localhost",
  TEST_DB_NAME = "mockdb",
  DATABASE_URL = "",
} = process.env;

export const devConnectionOptions: PostgresConnectionOptions = {
  type: "postgres",
  url: `postgres://${NAME}:${PASSWORD}@${HOST}/${DB_NAME}`,
  entities: [path.join(__dirname, "..", "/entity/*.ts")],
  synchronize: true,
};

export const testConnectionOptions: PostgresConnectionOptions = {
  type: "postgres",
  url: `postgres://${TEST_NAME}:${TEST_PASSWORD}@${TEST_HOST}/${TEST_DB_NAME}`,
  entities: [path.join(__dirname, "..", "/entity/*.ts")],
  synchronize: true,
};

export const prodConnectionOptions: PostgresConnectionOptions = {
  type: "postgres",
  url: DATABASE_URL,
  entities: [path.join(__dirname, "..", "/entity/*.js")],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
