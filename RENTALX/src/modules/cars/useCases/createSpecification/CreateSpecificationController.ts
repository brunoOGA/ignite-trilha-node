import { Request, Response } from "express";

import { CreateSpecficationUseCase } from "./CreateSpecficationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecficationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
