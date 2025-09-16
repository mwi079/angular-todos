import {Directive, effect, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodo {
  isCompleted = input<boolean>(false);
  el = inject(ElementRef);
  styledEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.color = 'green';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  });
}
