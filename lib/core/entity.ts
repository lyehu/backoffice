import { UniqueID } from "./valueObject/uniqueId";

export class Entity<T> {
  constructor(public id: UniqueID) {}

  protected copyWith(modifyObject: { [P in keyof T]?: T[P] }): T {
    return Object.assign(Object.create(this.constructor.prototype), {
      ...this,
      ...modifyObject,
    });
  }
}
