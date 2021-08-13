import { createConnection } from "typeorm";
import { IN_PROD } from "./config/app.config";

function establishDbConnection(url: string) {
  return createConnection({
    type: "postgres",
    url,
    entities: [__dirname + "/entity/*.ts"],
    synchronize: true,
    ssl: IN_PROD,
  });
}

export { establishDbConnection };
