import { InjectionToken } from '@angular/core';

export const REDIRECT_TO_ADDING_TASK_COMMAND_PORT = new InjectionToken<RedirectToAddingTaskCommandPort>(
  'REDIRECT_TO_ADDING_TASK_COMMAND_PORT',
);

export interface RedirectToAddingTaskCommandPort {
  redirect(command: RedirectToAddingTaskCommand): void;
}

export interface RedirectToAddingTaskCommand {
}
