import { MessageService } from "@/ui";
import { ServiceContainer } from "react-service-locator";
import { CreateCategoryHttpFacade } from "./modules/dishes/infrastructure/createCategory.httpFacade";
import { CreateDishHttpFacade } from "./modules/dishes/infrastructure/createDish.httpFacade";
import { GetCategoriesHttpFacade } from "./modules/dishes/infrastructure/getCategories.httpFacade";
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
