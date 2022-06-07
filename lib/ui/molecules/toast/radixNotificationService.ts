import { Service } from "react-service-locator";
import { CustomNotificationService } from "./notificationService";

@Service()
export class RadixNotificationService implements CustomNotificationService {
  async default(title: string, msg: string): Promise<void> {}

  async error(title: string, msg: string): Promise<void> {}

  async info(title: string, msg: string): Promise<void> {}

  async success(title: string, msg: string): Promise<void> {}

  async warning(title: string, msg: string): Promise<void> {}
}
