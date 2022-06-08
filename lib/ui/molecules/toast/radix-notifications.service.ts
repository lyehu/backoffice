import { Service } from "react-service-locator";
import { Subject } from "rxjs";
import { CustomNotificationService } from "./notifications.service";

export interface NotificationProps {
  type: "default" | "error" | "info" | "success" | "warning";
  title: string;
  description: string;
}

@Service()
export class RadixNotificationService implements CustomNotificationService {
  state$ = new Subject<NotificationProps>();

  async default(title: string, description: string): Promise<void> {
    this.state$.next({ type: "default", title, description });
  }

  async error(title: string, description: string): Promise<void> {
    this.state$.next({ type: "error", title, description });
  }

  async info(title: string, description: string): Promise<void> {
    this.state$.next({ type: "info", title, description });
  }

  async success(title: string, description: string): Promise<void> {
    this.state$.next({ type: "success", title, description });
  }

  async warning(title: string, description: string): Promise<void> {
    this.state$.next({ type: "warning", title, description });
  }
}
