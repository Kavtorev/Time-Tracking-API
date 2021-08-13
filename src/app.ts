import express, { NextFunction, Request, Response } from "express";
import task from "./api/routes/task";

function initializeApplication() {
  const app = express();

  app.use(express.json());
  app.use("/api", task);
  app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
  });

  // global error handler.
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
      message: err.message || "Internal server error",
      extra: err.extra,
    });
  });

  return app;
}

export { initializeApplication };
