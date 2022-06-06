import { HttpFacade } from "@/core";
import { BaseHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { Category } from "../domain/category";
import { CategoryCreateDTO } from "../domain/dto/category.dto";

@Service()
export class CreateCategoryHttpFacade implements HttpFacade<Category, string> {
  constructor(private readonly httpService: BaseHttpService) {}

  async execute(data: CategoryCreateDTO): Promise<string> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`,
        data
      );
    } catch (e) {}

    return "";
  }
}
