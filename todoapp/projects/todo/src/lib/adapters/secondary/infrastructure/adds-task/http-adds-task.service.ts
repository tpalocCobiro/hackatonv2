import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AddsTaskDto, AddsTaskDtoPort} from "../../../../application/ports/secondary/adds-task.dto-port";
import {mapTo, Observable, tap} from "rxjs";

@Injectable()
export class HttpAddsTaskService implements AddsTaskDtoPort{
  private readonly _projectId = 2289345713;

  constructor(private _client: HttpClient) {
  }

  add(dto: AddsTaskDto): Observable<boolean> {
    return this._client
      .post('https://api.todoist.com/rest/v1/tasks', {
        content: dto.description,
        project_id: this._projectId
      }, {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'X-Request-Id': '$(uuidgen)',
          Authorization: 'Bearer a5271cdf646d503e8ab4f13c1844f47016e54f9d'
        })
      })
      .pipe(
        mapTo(true),
      );
  }
}
