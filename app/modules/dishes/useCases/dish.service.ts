import { Service } from "react-service-locator";
import { DishDTO } from "../domain/dish.dto";
import { CreateDishHttpFacade } from "../infrastructure/createDish.httpFacade";
import { GetDishesHttpFacade } from "../infrastructure/getDishes.httpFacade";

@Service()
export class DishService {
  constructor(
    private createDishFacade: CreateDishHttpFacade,
    private getDishesFacade: GetDishesHttpFacade
  ) {}

  async create({
    allergens,
    category,
    imageUrl,
    ingredients,
    name,
    number,
    price,
  }: {
    allergens: string;
    category: number;
    imageUrl: string;
    ingredients: string;
    name: string;
    number: string;
    price: number;
  }) {
    try {
      const dish = DishDTO.create(
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
