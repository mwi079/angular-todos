import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  getTodoItems() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
