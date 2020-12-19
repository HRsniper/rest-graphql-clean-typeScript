import { Request, Response } from "express";

import { Controller } from "@/presentation/contracts";

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle();
    response.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
