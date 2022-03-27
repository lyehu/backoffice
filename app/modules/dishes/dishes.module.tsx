import { ServiceContainer } from "react-service-locator";
import { CreateDishHttpFacade } from "./infrastructure/createDish.httpFacade";
import { GetDishesHttpFacade } from "./infrastructure/getDishes.httpFacade";

export const DishesModule = ({ children }: { children: any }) => {
  return (
    <ServiceContainer services={[CreateDishHttpFacade, GetDishesHttpFacade]}>
      {children}
    </ServiceContainer>
  );
};
