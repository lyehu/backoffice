import { Dish } from "../dish";

export interface DishProps {
  allergens: string;
  category: string;
  imageUrl: string;
  ingredients: string;
  name: string;
  number: string;
  position: number;
  price: number;
}

export class DishDTO {
  static fromDb = ({
    allergens,
    category,
    imageUrl,
    ingredients,
    name,
    number,
    position,
    price,
  }: DishProps): Dish => {
    return Dish.create(
      allergens,
      category,
      imageUrl,
      ingredients,
      name,
      number,
      position,
      price
    );
  };

  static toDb = (dish: Dish): any => {
    return {
      allergens: dish.allergens,
      imageUrl: dish.imageUrl,
      ingredients: dish.ingredients,
      name: dish.name,
      position: dish.position,
      price: dish.price,
    };
  };
}
