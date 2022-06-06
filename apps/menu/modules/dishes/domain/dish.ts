export class Dish {
  private constructor(
    public readonly allergens: string,
    public readonly category: string,
    public readonly imageUrl: string,
    public readonly ingredients: string,
    public readonly name: string,
    public readonly number: string,
    public readonly position: number,
    public readonly price: string
  ) {}

  static create = (
    allergens: string,
    category: string,
    imageUrl: string,
    ingredients: string,
    name: string,
    number: string,
    position: number,
    price: string
  ) => {
    return new Dish(
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

  static empty = () => {
    return new Dish("", "", "", "", "", "", 0, "");
  };

  getData = () => {
    return {
      allergens: this.allergens,
      category: this.category,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients,
      name: this.name,
      number: this.number,
      position: this.position,
      price: this.price,
    };
  };

  setCategory = (category: string) => {
    return new Dish(
      this.allergens,
      category,
      this.imageUrl,
      this.ingredients,
      this.name,
      this.number,
      this.position,
      this.price
    );
  };

  setName = (name: string) => {
    return new Dish(
      this.allergens,
      this.category,
      this.imageUrl,
      this.ingredients,
      name,
      this.number,
      this.position,
      this.price
    );
  };

  setNumber = (number: string) => {
    return new Dish(
      this.allergens,
      this.category,
      this.imageUrl,
      this.ingredients,
      this.name,
      number,
      this.position,
      this.price
    );
  };

  setPosition = (position: number) => {
    return new Dish(
      this.allergens,
      this.category,
      this.imageUrl,
      this.ingredients,
      this.name,
      this.number,
      position,
      this.price
    );
  };

  setPrice = (price: string) => {
    return new Dish(
      this.allergens,
      this.category,
      this.imageUrl,
      this.ingredients,
      this.name,
      this.number,
      this.position,
      price
    );
  };
}
