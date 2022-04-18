export class Dish {
  private constructor(
    public readonly allergens: string,
    public readonly category: string,
    public readonly imageUrl: string,
    public readonly ingredients: string,
    public readonly name: string,
    public readonly number: string,
    public readonly price: number
  ) {}

  static create = (
    allergens: string,
    category: string,
    imageUrl: string,
    ingredients: string,
    name: string,
    number: string,
    price: number
  ) => {
    return new Dish(
      allergens,
      category,
      imageUrl,
      ingredients,
      name,
      number,
      price
    );
  };

  static empty = () => {
    return new Dish("", "", "", "", "", "", 0);
  };
}
