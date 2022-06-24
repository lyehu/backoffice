import { Service } from "react-service-locator";
import { Subject } from "rxjs";
import { CustomNotificationService } from "./notifications.service";

export type Types = "default" | "error" | "info" | "success" | "warning";

export interface NotificationProps {
  type: Types;
  title: string;
  description: string;
}

@Service()
export class RadixNotificationService implements CustomNotificationService {
  state$ = new Subject<NotificationProps>();

  default(title: string, description: string): void {
    this.state$.next({ type: "default", title, description });
  }

  error(title: string, description: string): void {
    this.state$.next({ type: "error", title, description });
  }

  info(title: string, description: string): void {
    this.state$.next({ type: "info", title, description });
  }

  success(title: string, description: string): void {
    this.state$.next({ type: "success", title, description });
  }

  warning(title: string, description: string): void {
    this.state$.next({ type: "warning", title, description });
  }
}
