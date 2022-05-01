import { Service } from "react-service-locator";
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

  async getAll(): Promise<any[]> {
    return this.getCategoriesFacade.execute();
  }
}
