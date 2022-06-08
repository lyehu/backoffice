import { RadixNotificationService } from "@/ui";
import { Service } from "react-service-locator";
import { Dish } from "../domain/dish";
import { GetDishesDTO } from "../domain/dto/getDishes.dto";
import { CreateDishHttpFacade } from "../infrastructure/createDish.httpFacade";
import { GetDishesHttpFacade } from "../infrastructure/getDishes.httpFacade";

@Service()
export class DishService {
  constructor(
    private createDishFacade: CreateDishHttpFacade,
    private getDishesFacade: GetDishesHttpFacade,
    private notificationService: RadixNotificationService
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
      this.notificationService.success("¡Enhorabuena!", "Plato nuevo creado");
    } catch (e) {
      this.notificationService.error(
        "¡Vaya!",
        "Parece que algo no ha funcionado"
      );
    }
  }

  async getDishes(filters: GetDishesDTO): Promise<Dish[]> {
    return this.getDishesFacade.execute(filters);
  }
}
