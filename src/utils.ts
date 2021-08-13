import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (handler: any) => {
  return (req: Request, res: Response, next: NextFunction) =>
    handler(req, res, next).catch((error: any) => next(error));
};
