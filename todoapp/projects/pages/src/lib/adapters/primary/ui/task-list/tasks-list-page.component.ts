import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-tasks-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tasks-list-page.component.html',
})
export class TasksListPageComponent {

}
