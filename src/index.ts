import "reflect-metadata";
import { PORT, IN_PROD } from "./config/app.config";
if (!IN_PROD) require("dotenv").config();
import { developmentDbUrl, productionDbUrl } from "./config/db.config";
import { initializeApplication } from "./app";
import { establishDbConnection } from "./db";

(async () => {
  try {
    await establishDbConnection(IN_PROD ? productionDbUrl : developmentDbUrl);
    initializeApplication().listen(PORT, () =>
      console.log(`Server is listening at PORT ${PORT}`)
    );
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
})();
