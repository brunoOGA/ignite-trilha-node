import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "121212",
      expected_return_date: new Date(),
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "user_id_1",
        car_id: "car_id_1",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        user_id: "user_id_1",
        car_id: "car_id_2",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if there is another open to same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "user_id_1",
        car_id: "car_id_1",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        user_id: "user_id_2",
        car_id: "car_id_1",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
