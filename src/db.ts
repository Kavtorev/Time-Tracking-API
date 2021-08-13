import { createConnection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

function establishDbConnection(connectionOptions: PostgresConnectionOptions) {
  return createConnection(connectionOptions);
}

export { establishDbConnection };
