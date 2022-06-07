export abstract class CustomNotificationService {
  abstract default(title: string, msg: string): Promise<void>;
  abstract success(title: string, msg: string): Promise<void>;
  abstract info(title: string, msg: string): Promise<void>;
  abstract warning(title: string, msg: string): Promise<void>;
  abstract error(title: string, msg: string): Promise<void>;
}
