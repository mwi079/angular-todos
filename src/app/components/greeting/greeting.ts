import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  template: `
    <h1>Greetings!</h1>
    <p>{{ message() }}</p>
  `,
  styles: ``,
})
export class Greeting {
  message = input<string>('hello hello');
}
