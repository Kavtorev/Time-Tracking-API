import { createConnection } from "typeorm";

function establishDbConnection(url: string) {
  return createConnection({
    type: "postgres",
    url,
    entities: [__dirname + "/entity/*.ts"],
    synchronize: true,
  });
}

export { establishDbConnection };
