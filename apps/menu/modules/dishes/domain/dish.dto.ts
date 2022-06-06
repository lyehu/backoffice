import { Dish } from "./dish";

export interface DishProps {
  allergens: string;
  category: string;
  imageUrl: string;
  ingredients: string;
  name: string;
  number: string;
  price: string;
}

export class DishDTO {
  static fromJSON = ({
    allergens,
    category,
    imageUrl,
    ingredients,
    name,
    number,
    price,
  }: DishProps): Dish => {
    return Dish.create(
      allergens,
      category,
      imageUrl,
      ingredients,
      name,
      number,
      price.toString()
    );
  };

  static toJSON = (dish: Dish): any => {
    return {
      allergens: dish.allergens,
      imageUrl: dish.imageUrl,
      ingredients: dish.ingredients,
      name: dish.name,
      price: dish.price,
    };
  };
}
