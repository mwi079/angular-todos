import {Component, input, output} from '@angular/core';
import {Todo} from '../../model/todo.type';
import {HighlightCompletedTodo} from '../../directives/highlight-completed-todo';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  standalone: true,
  template: `
    <li appHighlightCompletedTodo [isCompleted]="todo().completed" class="todo-item">
      <label for="todo-{{ todo().id }}">{{ todo().title | uppercase }}</label>
      <input
        id="todo-{{ todo().id }}"
        type="checkbox"
        [checked]="todo().completed"
        (change)="todoClicked()"
      />
    </li>
  `,
  styles: `
    .todo-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    label {
      margin: 0;
    }

    input {
      margin: 0;
    }`,
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggle = output<Todo>();

  todoClicked() {
    this.todoToggle.emit(this.todo());
  }
}
