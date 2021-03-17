import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecficationUseCase } from "./CreateSpecficationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecficationUseCase(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
