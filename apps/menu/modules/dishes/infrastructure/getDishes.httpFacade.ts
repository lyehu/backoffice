import { HttpFacade } from "@/core";
import { CustomHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { FIREBASE_CONFIG } from "../../../../config";
import { DishDTO } from "../domain/dish.dto";

@Service()
export class GetDishesHttpFacade implements HttpFacade<void, DishDTO[]> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(): Promise<DishDTO[]> {
    try {
      return await this.httpService.get(
        `restaurants/8zSuQV3YmUJrfTsnzlri/categories/XN8PUKjEYNK94OsPXQHr/dishes`
      );
    } catch (e) {}

    return [];
  }
}
