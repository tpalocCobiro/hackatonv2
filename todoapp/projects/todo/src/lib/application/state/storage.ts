import { Observable, ReplaySubject} from 'rxjs';

export class Storage<T> {
  private value$: ReplaySubject<T> = new ReplaySubject(1);

  set(newValue: T): void {
    this.value$.next(newValue);
  }

  select(): Observable<T> {
    return this.value$.asObservable();
  }
}
