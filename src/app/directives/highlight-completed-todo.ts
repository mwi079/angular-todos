import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
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
