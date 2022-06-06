import { ServiceContainer } from "react-service-locator";
import { FirebaseService } from "./firebase.http";
import { BaseHttpService } from "./http";

export const Infrastructure = ({ children }: { children: any }) => {
  return (
    <ServiceContainer
      services={[
        {
          provide: BaseHttpService,
          useClass: FirebaseService,
        },
      ]}
    >
      {children}
    </ServiceContainer>
  );
};
