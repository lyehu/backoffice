export abstract class HttpFacade<T, Z> {
  abstract execute(props: T): Promise<Z>;
}
