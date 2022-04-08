import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {

}
