import { Service } from "react-service-locator";
import { Dish } from "../domain/dish";
import { DishProps } from "../domain/dish.dto";
import { CreateDishHttpFacade } from "../infrastructure/createDish.httpFacade";
import { GetDishesHttpFacade } from "../infrastructure/getDishes.httpFacade";

@Service()
export class DishService {
  constructor(
    private createDishFacade: CreateDishHttpFacade,
    private getDishesFacade: GetDishesHttpFacade
  ) {}

  async add({
    allergens,
    category,
    imageUrl,
    ingredients,
    name,
    number,
    price,
  }: DishProps) {
    try {
      const dish = Dish.create(
        allergens,
        category,
        imageUrl,
        ingredients,
        name,
        number,
        price
      );
      this.createDishFacade.execute(dish);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(): Promise<any[]> {
    return this.getDishesFacade.execute();
  }
}
