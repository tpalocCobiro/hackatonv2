import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {filter, map, mapTo, Observable, tap} from "rxjs";
import {
  GetsTasksListDtoPort,
  Task
} from "../../../../application/ports/secondary/gets-tasks-list.dto-port";

@Injectable()
export class HttpGetsTasksListService implements GetsTasksListDtoPort {
  private readonly _projectId = 2289345713;

  constructor(private _client: HttpClient) {
  }

  get(): Observable<Task[]> {
    return this._client
      .get<TaskAttributes[]>('https://api.todoist.com/rest/v1/tasks', {
        headers: new HttpHeaders({
          Authorization: 'Bearer a5271cdf646d503e8ab4f13c1844f47016e54f9d'
        })
      })
      .pipe(
        map(tasks => tasks
          .filter((task) => task.project_id === this._projectId)
          .map(task => ({
            id: task.id,
              description: task.content
          }))
        ),
        tap(data => console.log),
      );
  }
}

interface TaskAttributes {
  id: number;
  project_id: number,
  content: string,
}
