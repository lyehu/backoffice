import { DomainException } from "../exceptions";

export namespace CoreDomainException {
  export class InvalidId extends DomainException {
    title = "Invalid id";
    text = "The id format is incorrect";

    constructor() {
      super("Invalid id");
    }
  }
}
