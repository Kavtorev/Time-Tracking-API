import "reflect-metadata";
import { PORT } from "./config/app";
import { initializeApplication } from "./app";
import { establishDbConnection } from "./db";

(async () => {
  try {
    await establishDbConnection();
    initializeApplication().listen(PORT, () =>
      console.log(`Server is listening at PORT ${PORT}`)
    );
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
})();
