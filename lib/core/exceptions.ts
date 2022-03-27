export type CustomException = DomainException | InfrastructureException | any;

export abstract class DomainException extends Error {
  abstract title: string;
  abstract text: string;

  protected constructor(error: any) {
    super(`*** DOMAIN EXCEPTION --> ${error} ***`);
  }
}

export abstract class InfrastructureException extends Error {
  title = "Error";
  text = "Something bad happened";

  protected constructor(error: any) {
    super(` *** INFRASTRUTURE EXCEPTION --> ${error} ***`);
    this.text = error;
  }
}
