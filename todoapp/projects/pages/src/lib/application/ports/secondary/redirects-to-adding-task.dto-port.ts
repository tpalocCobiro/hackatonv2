import { InjectionToken } from '@angular/core';

export const REDIRECTS_TO_ADDING_TASK_DTO_PORT = new InjectionToken<RedirectsToAddingTaskDtoPort>('REDIRECTS_TO_ADDING_TASK_DTO_PORT');

export interface RedirectsToAddingTaskDtoPort {
  redirect(dto: RedirectsToAddingTaskDto): void;
}

export interface RedirectsToAddingTaskDto {

}
