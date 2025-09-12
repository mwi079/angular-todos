import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo';
import { Todo } from '../model/todo.type';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, NgIf, NgFor, FormsModule, FilterTodosPipe],
  template: `
    <h3>Todo List</h3>
    <p *ngIf="!todoItems().length">Loading...</p>

    <label>Filter Todos</label>
    <input name="searchTerm" [(ngModel)]="searchTerm" placeholder="Search todos..." />

    <ul class="todo-list">
      <app-todo-item
        *ngFor="let todo of todoItems() | filterTodos : searchTerm()"
        [todo]="todo"
        (todoToggle)="updateTodoItem($event)"
      ></app-todo-item>
    </ul>
  `,
  styles: `
    ul {
      list-style: none;
      padding: 0;
    }
    .todo-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

  `,
})
export class Todos implements OnInit {
  http = inject(HttpClient);
  todoService = inject(TodoService);

  todoItems = signal<Todo[]>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodoItems()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
