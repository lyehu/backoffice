import { CoreDomainException } from "./exceptions";

export class UniqueID {
  constructor(public readonly value: string) {}

  static create(value: string): UniqueID {
    UniqueID.validate(value);
    return new UniqueID(value);
  }

  public static validate(id: string) {
    if (!id.length) {
      throw new CoreDomainException.InvalidId();
    }
  }
}
