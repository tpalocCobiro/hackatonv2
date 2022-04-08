import { InjectionToken } from '@angular/core';

export const ADDS_TASK_COMMAND_PORT = new InjectionToken<AddsTaskCommandPort>(
  'ADDS_TASK_COMMAND_PORT',
);

export interface AddsTaskCommandPort {
  add(command: AddsTaskCommand): void;
}

export interface AddsTaskCommand {
  description: string;
}
