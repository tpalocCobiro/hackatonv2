import {Injectable} from "@angular/core";
import {
  RedirectsToAddingTaskDto,
  RedirectsToAddingTaskDtoPort
} from "../../../../application/ports/secondary/redirects-to-adding-task-dto.port";
import { Router } from '@angular/router';

@Injectable()
export class RouterRedirectToAddingTaskService implements RedirectsToAddingTaskDtoPort {
  constructor(private _router: Router) {
  }

  redirect(dto: RedirectsToAddingTaskDto): void {
    this._router.navigate(['add-task']);
  }
}
