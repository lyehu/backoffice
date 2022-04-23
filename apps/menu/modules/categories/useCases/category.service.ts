import { Service } from "react-service-locator";
import { Category } from "../domain/category";
import { CategoryProps } from "../domain/category.dto";
import { CreateCategoryHttpFacade } from "../infrastructure/createCategory.httpFacade";
import { GetCategoriesHttpFacade } from "../infrastructure/getCategories.httpFacade";

@Service()
export class CategoryService {
  constructor(
    private createCategoryFacade: CreateCategoryHttpFacade,
    private getCategoriesFacade: GetCategoriesHttpFacade
  ) {}

  async add({ name, nameEnglish }: CategoryProps) {
    try {
      const category = Category.create(name, nameEnglish);
      this.createCategoryFacade.execute(category);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(): Promise<any[]> {
    return this.getCategoriesFacade.execute();
  }
}
