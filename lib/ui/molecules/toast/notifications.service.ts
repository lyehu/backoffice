export abstract class CustomNotificationService {
  abstract default(title: string, description: string): Promise<void>;
  abstract success(title: string, description: string): Promise<void>;
  abstract info(title: string, description: string): Promise<void>;
  abstract warning(title: string, description: string): Promise<void>;
  abstract error(title: string, description: string): Promise<void>;
}
