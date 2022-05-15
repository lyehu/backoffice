import { Option } from "@/ui";
import { Service } from "react-service-locator";
import { Category } from "../domain/category";
import { CreateCategoryHttpFacade } from "../infrastructure/createCategory.httpFacade";
import { GetCategoriesHttpFacade } from "../infrastructure/getCategories.httpFacade";

@Service()
export class CategoryService {
  constructor(
    private createCategoryFacade: CreateCategoryHttpFacade,
    private getCategoriesFacade: GetCategoriesHttpFacade
  ) {}

  async add(name: string) {
    try {
      const categories = await this.getAll();
      const position = categories.length;

      this.createCategoryFacade.execute({ name, position });
    } catch (e) {
      console.log(e);
    }
  }

  private async getAll(): Promise<Category[]> {
    return this.getCategoriesFacade.execute();
  }

  async getOptions(): Promise<Option[]> {
    const categories = await this.getAll();
    return categories.map((category) => category.toOption());
  }
}
