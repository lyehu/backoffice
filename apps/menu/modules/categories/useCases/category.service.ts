import { StatefulService } from "@/core";
import { Service } from "react-service-locator";
import { Category } from "../domain/category";
import { CreateCategoryHttpFacade } from "../infrastructure/createCategory.httpFacade";
import { GetCategoriesHttpFacade } from "../infrastructure/getCategories.httpFacade";

@Service()
export class CategoryService extends StatefulService<Category> {
  constructor(
    private createCategoryFacade: CreateCategoryHttpFacade,
    private getCategoriesFacade: GetCategoriesHttpFacade
  ) {
    super();
  }

  async add(name: string) {
    try {
      const categories = await this.getAll();
      const position = categories.length;

      this.createCategoryFacade.execute({ name, position });
      this.loadCategories();
    } catch (e) {
      console.log(e);
    }
  }

  private async getAll(): Promise<Category[]> {
    return await this.getCategoriesFacade.execute();
  }

  async loadCategories(): Promise<void> {
    const categories = await this.getAll();
    this.setEntities(categories);
  }
}
