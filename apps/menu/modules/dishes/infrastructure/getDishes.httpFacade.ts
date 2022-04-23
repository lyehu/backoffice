import { Service } from "react-service-locator";
import { HttpFacade } from "../../../../../lib/core";
import { CustomHttpService } from "../../../../../lib/infrastructure/http";
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
