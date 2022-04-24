import { MessageService } from "@/core";
import { ServiceContainer } from "react-service-locator";
import { CreateCategoryHttpFacade } from "./modules/categories/infrastructure/createCategory.httpFacade";
import { GetCategoriesHttpFacade } from "./modules/categories/infrastructure/getCategories.httpFacade";
import { CreateDishHttpFacade } from "./modules/dishes/infrastructure/createDish.httpFacade";
import { GetDishesHttpFacade } from "./modules/dishes/infrastructure/getDishes.httpFacade";

export const MenuModule = ({ children }: { children: any }) => {
  return (
    <ServiceContainer
      services={[
        CreateDishHttpFacade,
        GetDishesHttpFacade,
        CreateCategoryHttpFacade,
        GetCategoriesHttpFacade,
        MessageService,
      ]}
    >
      {children}
    </ServiceContainer>
  );
};
