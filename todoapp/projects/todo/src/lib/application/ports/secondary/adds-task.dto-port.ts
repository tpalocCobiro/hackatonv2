import { InjectionToken } from '@angular/core';
import {Observable} from "rxjs";

export const ADDS_TASK_DTO_PORT = new InjectionToken<AddsTaskDtoPort>('ADDS_TASK_DTO_PORT');

export interface AddsTaskDtoPort {
  add(dto: AddsTaskDto): Observable<boolean>;
}

export interface AddsTaskDto {
  description: string
}
