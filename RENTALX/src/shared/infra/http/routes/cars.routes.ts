import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarContoller = new CreateCarController();
const listAvailableController = new ListAvailableCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarContoller.handle
);

carsRoutes.get("/available", listAvailableController.handle);

export { carsRoutes };
