export abstract class BaseHttpService {
  abstract get<T>(url: string): Promise<T>;
  abstract post<T>(url: string, data: any): Promise<T>;
  abstract patch<T>(url: string, data: any): Promise<T>;
  abstract put<T>(url: string, data: any): Promise<T>;
  abstract delete<T>(url: string): Promise<T>;
}

export abstract class CustomHttpService extends BaseHttpService {
  abstract init(config: object): void;
}
