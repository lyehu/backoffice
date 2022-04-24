import { HttpFacade } from "@/core";
import { CustomHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { FIREBASE_CONFIG } from "../../../../config";
import { Category } from "../domain/category";
import { CategoryDTO } from "../domain/category.dto";

@Service()
export class CreateCategoryHttpFacade implements HttpFacade<Category, void> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(data: Category): Promise<any> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`,
        CategoryDTO.toJSON(data)
      );
    } catch (e) {}
  }
}
