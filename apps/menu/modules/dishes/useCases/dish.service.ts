import { Service } from "react-service-locator";
import { Dish } from "../domain/dish";
import { GetDishesDTO } from "../domain/dto/getDishes.dto";
import { CreateDishHttpFacade } from "../infrastructure/createDish.httpFacade";
import { GetDishesHttpFacade } from "../infrastructure/getDishes.httpFacade";

@Service()
export class DishService {
  constructor(
    private createDishFacade: CreateDishHttpFacade,
    private getDishesFacade: GetDishesHttpFacade
  ) {}

  async add(dish: Dish) {
    try {
      const filters = {
        categoryId: dish.category,
      };
      const dishes = await this.getDishes(filters);
      const position = dishes.length;
      dish.setPosition(position);
      this.createDishFacade.execute(dish);
    } catch (e) {
      console.log(e);
    }
  }

  async getDishes(filters: GetDishesDTO): Promise<Dish[]> {
    return this.getDishesFacade.execute(filters);
  }
}
