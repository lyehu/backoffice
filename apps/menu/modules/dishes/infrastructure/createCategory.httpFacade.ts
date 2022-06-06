import { HttpFacade } from "@/core";
import { BaseHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { Category } from "../domain/category";
import { CategoryCreateDTO } from "../domain/category.dto";

@Service()
export class CreateCategoryHttpFacade implements HttpFacade<Category, void> {
  constructor(private readonly httpService: BaseHttpService) {}

  async execute(data: CategoryCreateDTO): Promise<void> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`,
        data
      );
    } catch (e) {}
  }
}
