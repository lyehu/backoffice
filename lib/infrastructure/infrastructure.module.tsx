import { ServiceContainer } from "react-service-locator";
import { FirebaseService } from "./firebase.http";
import { CustomHttpService } from "./http";

export const Infrastructure = ({ children }: { children: any }) => {
  return (
    <ServiceContainer
      services={[
        {
          provide: CustomHttpService,
          useClass: FirebaseService,
        },
      ]}
    >
      {children}
    </ServiceContainer>
  );
};
