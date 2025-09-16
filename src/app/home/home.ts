import {Component, signal} from '@angular/core';
import {Greeting} from '../components/greeting/greeting';
import {Counter} from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  standalone: true,
  template: `
    <app-greeting [message]="homeMessage()"/>
    <app-counter/>
    <input placeholder="Type something" type="text" (keyup)="keyUpHandler($event)"/>
  `,
  styles: `
    input {
      margin-top: 16px;
    }
  `,
})
export class Home {
  homeMessage = signal('Hello World');

  keyUpHandler(event: KeyboardEvent) {
    console.log('User typed: ', event.key);
  }
}
