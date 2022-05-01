import { HttpFacade } from "@/core";
import { CustomHttpService } from "@/infrastructure";
import { Service } from "react-service-locator";
import { FIREBASE_CONFIG } from "../../../../config";
import { Category } from "../domain/category";
import { CategoryCreateDTO } from "../domain/category.dto";

@Service()
export class CreateCategoryHttpFacade implements HttpFacade<Category, void> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(data: CategoryCreateDTO): Promise<void> {
    try {
      return await this.httpService.post(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`,
        data
      );
    } catch (e) {}
  }
}
