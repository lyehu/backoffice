import {
  BehaviorSubject,
  distinctUntilChanged,
  map,
  Observable,
  pluck,
} from "rxjs";

export interface State<T> {
  loading: boolean;
  entities: { [key: string]: T };
  filters: StateFilters;
}

export interface StateFilters {
  text: string;
}

const initialFilters = {
  text: "",
};

const initialState = {
  loading: false,
  entities: {},
  total: 0,
  filters: initialFilters,
};

export class StatefulService<T> {
  public state$ = new BehaviorSubject<State<T>>(initialState);
  public entities$: Observable<T[]> = this.state$.pipe(
    pluck("entities"),
    map((entities) => {
      return Object.keys(entities).reduce((acc: any[], val) => {
        //@ts-ignore
        return [...acc, entities[val]];
      }, []);
    }),
    distinctUntilChanged()
  );

  public setLoading(value: boolean) {
    const currentState = this.state$.getValue();
    this.state$.next({ ...currentState, loading: value });
  }

  public setEntities(list: T[]) {
    const currentState = this.state$.getValue();
    const entities = list.reduce((acc, val) => {
      //@ts-ignore
      return { ...acc, [val.id]: val };
    }, {});
    this.state$.next({ ...currentState, entities });
  }

  public addEntity(entity: T) {
    const currentState = this.state$.getValue();
    //@ts-ignore
    const entities = { ...currentState.entities, [entity.id]: entity };
    this.state$.next({ ...currentState, entities });
  }
}
