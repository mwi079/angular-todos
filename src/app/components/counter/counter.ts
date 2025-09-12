import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>counter value :{{ counterValue() }}</p>
    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="reset()">Reset</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: ``,
})
export class Counter {
  counterValue = signal(0);

  increment = () => {
    this.counterValue.update((value) => value + 1);
  };
  reset = () => {
    this.counterValue.set(0);
  };
  decrement = () => {
    this.counterValue.update((value) => value - 1);
  };
}
