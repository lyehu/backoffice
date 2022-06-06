import { HttpFacade } from "@/core";
import { BaseHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { DishDTO } from "../domain/dish.dto";

@Service()
export class GetDishesHttpFacade implements HttpFacade<void, DishDTO[]> {
  constructor(private readonly httpService: BaseHttpService) {}

  async execute(): Promise<DishDTO[]> {
    try {
      return await this.httpService.get(
        `restaurants/8zSuQV3YmUJrfTsnzlri/categories/XN8PUKjEYNK94OsPXQHr/dishes`
      );
    } catch (e) {}

    return [];
  }
}
