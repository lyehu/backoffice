export class Category {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly nameEnglish: string,
    public readonly position: number
  ) {}

  static create = ({
    id,
    name,
    nameEnglish,
    position,
  }: {
    id: string;
    name: string;
    nameEnglish: string;
    position: number;
  }) => {
    return new Category(id, name, nameEnglish, position);
  };

  static empty = () => {
    return new Category("", "", "", 0);
  };

  toOption = () => {
    return {
      id: this.id,
      label: this.name,
      value: this.id,
    };
  };
}
