import { BaseHttpService } from "@/infrastructure";
import { HttpFacade } from "lib/core";
import { Service } from "react-service-locator";
import { Category } from "../domain/category";
import { CategoryDbProps, CategoryDTO } from "../domain/dto/category.dto";

@Service()
export class GetCategoriesHttpFacade implements HttpFacade<void, Category[]> {
  constructor(private readonly httpService: BaseHttpService) {}

  async execute(): Promise<Category[]> {
    try {
      const categories: CategoryDbProps[] = await this.httpService.get(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`
      );
      return categories.map(CategoryDTO.fromDb);
    } catch (e) {}
    return [];
  }
}
