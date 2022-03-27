export class DishDTO {
  private constructor(
    public allergens: string,
    public category: number,
    public imageUrl: string,
    public ingredients: string,
    public name: string,
    public number: string,
    public price: number
  ) {}

  static create(
    allergens: string,
    category: number,
    imageUrl: string,
    ingredients: string,
    name: string,
    number: string,
    price: number
  ) {
    return new DishDTO(
      allergens,
      category,
      imageUrl,
      ingredients,
      name,
      number,
      price
    );
  }

  public toJSON(): any {
    return {
      allergens: this.allergens,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients,
      name: this.name,
      price: this.price,
    };
  }
}
