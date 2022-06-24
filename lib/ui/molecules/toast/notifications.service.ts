export abstract class CustomNotificationService {
  abstract default(title: string, description: string): void;
  abstract success(title: string, description: string): void;
  abstract info(title: string, description: string): void;
  abstract warning(title: string, description: string): void;
  abstract error(title: string, description: string): void;
}
