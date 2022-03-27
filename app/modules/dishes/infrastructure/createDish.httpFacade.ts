import { HttpFacade } from "../../../../lib/core";
import { CustomHttpService } from "../../../../lib/infrastructure/http";
import { DishDTO } from "../domain/dish.dto";

import { Service } from "react-service-locator";
import { FIREBASE_CONFIG } from "../../../config";

@Service()
export class CreateDishHttpFacade implements HttpFacade<DishDTO, string> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(data: DishDTO): Promise<any> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories/XN8PUKjEYNK94OsPXQHr/dishes`,
        data.toJSON()
      );
    } catch (e) {}
  }
}
