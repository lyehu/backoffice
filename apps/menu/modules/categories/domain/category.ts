export class Category {
  private constructor(
    public readonly name: string,
    public readonly nameEnglish: string
  ) {}

  static create = (name: string, nameEnglish: string) => {
    return new Category(name, nameEnglish);
  };

  static empty = () => {
    return new Category("", "");
  };
}
