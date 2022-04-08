import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
  GETS_TASKS_LIST_QUERY_PORT,
  GetsTasksListQueryPort
} from "../../../../application/ports/primary/gets-tasks-list.query-port";

@Component({
  selector: 'app-tasks-list',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {

  tasksList$ = this._getsTasksListQueryPort.getTasksListQuery();

  constructor(@Inject(GETS_TASKS_LIST_QUERY_PORT) private _getsTasksListQueryPort: GetsTasksListQueryPort) {
  }
}
