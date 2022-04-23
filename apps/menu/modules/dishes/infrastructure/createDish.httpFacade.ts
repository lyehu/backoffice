import { Service } from "react-service-locator";
import { HttpFacade } from "../../../../../lib/core";
import { CustomHttpService } from "../../../../../lib/infrastructure/http";
import { FIREBASE_CONFIG } from "../../../../config";
import { Dish } from "../domain/dish";
import { DishDTO } from "../domain/dish.dto";

@Service()
export class CreateDishHttpFacade implements HttpFacade<Dish, string> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(data: Dish): Promise<any> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories/XN8PUKjEYNK94OsPXQHr/dishes`,
        DishDTO.toJSON(data)
      );
    } catch (e) {}
  }
}
