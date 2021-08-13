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

export const developmentDbUrl = `postgres://${NAME}:${PASSWORD}@${HOST}/${DB_NAME}`;
export const testDbUrl = `postgres://${TEST_NAME}:${TEST_PASSWORD}@${TEST_HOST}/${TEST_DB_NAME}`;
export const productionDbUrl = DATABASE_URL;
