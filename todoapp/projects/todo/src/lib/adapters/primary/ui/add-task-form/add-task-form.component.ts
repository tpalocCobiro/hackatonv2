import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {
  ADDS_TASK_COMMAND_PORT,
  AddsTaskCommandPort
} from "../../../../application/ports/primary/adds-task-command.port";

@Component({
  selector: 'app-add-task-form',
  styleUrls: ['./add-task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-task-form.component.html',
})
export class AddTaskFormComponent {
  taskDescription = new FormControl('', [Validators.required]);

  constructor(@Inject(ADDS_TASK_COMMAND_PORT) private _addsTaskCommand: AddsTaskCommandPort) {
  }

  onAdd() {
      this._addsTaskCommand.add({
        description: this.taskDescription.value
      });
  }
}
