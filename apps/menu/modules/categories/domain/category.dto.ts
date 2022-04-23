import { Category } from "./category";

export interface CategoryProps {
  name: string;
  nameEnglish: string;
}

export class CategoryDTO {
  static fromJSON = ({ name, nameEnglish }: CategoryProps): Category => {
    return Category.create(name, nameEnglish);
  };

  static toJSON = (category: Category): any => {
    return {
      name: category.name,
      name_english: category.nameEnglish,
    };
  };
}
