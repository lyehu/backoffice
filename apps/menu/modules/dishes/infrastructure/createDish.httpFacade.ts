import { HttpFacade } from "@/core";
import { BaseHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { Dish } from "../domain/dish";
import { DishDTO } from "../domain/dto/dish.dto";

@Service()
export class CreateDishHttpFacade implements HttpFacade<Dish, string> {
  constructor(private readonly httpService: BaseHttpService) {}

  async execute(data: Dish): Promise<any> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories/${data.category}/dishes`,
        DishDTO.toDb(data)
      );
    } catch (e) {}
  }
}
