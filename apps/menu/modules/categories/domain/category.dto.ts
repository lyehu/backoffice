import { Category } from "./category";

export interface CategoryDbProps {
  id: string;
  name: string;
  name_english: string;
  position: number;
}

export interface CategoryCreateDTO {
  name: string;
  position: number;
}

export class CategoryDTO {
  static fromJSON = ({
    id,
    name,
    name_english,
    position,
  }: CategoryDbProps): Category => {
    return Category.create({
      id,
      name,
      nameEnglish: name_english,
      position,
    });
  };

  static toJSON = (category: Category): CategoryDbProps => {
    return {
      id: category.id,
      name: category.name,
      name_english: category.nameEnglish,
      position: category.position,
    };
  };
}
