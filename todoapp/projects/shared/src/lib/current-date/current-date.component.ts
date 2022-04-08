import {ChangeDetectionStrategy, Component} from '@angular/core';
import {mapTo, timer} from "rxjs";

@Component({
  selector: 'app-current-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './current-date.component.html',
})
export class CurrentDateComponent {
  clock$ = timer(0, 1000 * 60).pipe(
    mapTo(new Date())
  );
}
