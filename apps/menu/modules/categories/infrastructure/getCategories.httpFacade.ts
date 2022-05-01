import { CustomHttpService } from "@/infrastructure";
import { HttpFacade } from "lib/core";
import { Service } from "react-service-locator";
import { FIREBASE_CONFIG } from "../../../../config";
import { Category } from "../domain/category";
import { CategoryDbProps, CategoryDTO } from "../domain/category.dto";

@Service()
export class GetCategoriesHttpFacade implements HttpFacade<void, Category[]> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(): Promise<Category[]> {
    try {
      const categories: CategoryDbProps[] = await this.httpService.get(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`
      );
      return categories.map(CategoryDTO.fromJSON);
    } catch (e) {}
    return [];
  }
}
