import { CustomHttpService } from "@/infrastructure";
import { HttpFacade } from "lib/core";
import { Service } from "react-service-locator";
import { FIREBASE_CONFIG } from "../../../../config";
import { Category } from "../domain/category";

@Service()
export class GetCategoriesHttpFacade implements HttpFacade<void, Category[]> {
  constructor(private readonly httpService: CustomHttpService) {
    httpService.init(FIREBASE_CONFIG);
  }

  async execute(): Promise<Category[]> {
    try {
      return await this.httpService.get(
        `/restaurants/8zSuQV3YmUJrfTsnzlri/categories`
      );
    } catch (e) {}
    return [];
  }
}
