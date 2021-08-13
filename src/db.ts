import { createConnection } from "typeorm";

function establishDbConnection() {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "timetracker",
    entities: [__dirname + "/entity/*.ts"],
    synchronize: true,
  });
}

function establishMockDbConnection() {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "mockdb",
    entities: [__dirname + "/entity/*.ts"],
    synchronize: true,
  });
}

export { establishDbConnection, establishMockDbConnection };
