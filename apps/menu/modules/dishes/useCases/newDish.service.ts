import { Service } from "react-service-locator";
import { BehaviorSubject, distinctUntilChanged, Observable, pluck } from "rxjs";
import { Dish } from "../domain/dish";

@Service()
export class NewDishService {
  state$ = new BehaviorSubject({ dish: Dish.empty() });
  public dish$: Observable<Dish> = this.state$.pipe(
    pluck("dish"),
    distinctUntilChanged()
  );

  constructor() {}

  static create() {
    new NewDishService();
  }

  updateCategory = (category: string) => {
    const currentState = this.state$.getValue();
    this.state$.next({
      ...currentState,
      dish: currentState.dish.setCategory(category),
    });
  };

  updateName = (name: string) => {
    const currentState = this.state$.getValue();
    this.state$.next({
      ...currentState,
      dish: currentState.dish.setName(name),
    });
  };

  updateNumber = (number: string) => {
    const currentState = this.state$.getValue();
    this.state$.next({
      ...currentState,
      dish: currentState.dish.setNumber(number),
    });
  };

  updatePrice = (price: string) => {
    const currentState = this.state$.getValue();
    this.state$.next({
      ...currentState,
      dish: currentState.dish.setPrice(price),
    });
  };
}
