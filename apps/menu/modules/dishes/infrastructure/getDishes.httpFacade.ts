import { HttpFacade } from "@/core";
import { BaseHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { Dish } from "../domain/dish";
import { DishDTO } from "../domain/dto/dish.dto";
import { GetDishesDTO } from "../domain/dto/getDishes.dto";

@Service()
export class GetDishesHttpFacade implements HttpFacade<GetDishesDTO, Dish[]> {
  constructor(private readonly httpService: BaseHttpService) {}

  async execute(request: GetDishesDTO): Promise<Dish[]> {
    try {
      const dishes: any[] = await this.httpService.get(
        `restaurants/8zSuQV3YmUJrfTsnzlri/categories/${request.categoryId}/dishes`
      );
      return dishes.map(DishDTO.fromDb);
    } catch (e) {}

    return [];
  }
}
