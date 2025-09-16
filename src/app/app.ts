import {Component, signal} from '@angular/core';
import {Header} from './components/header/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  standalone: true,
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
  `,
  styles: `
    main {
      padding-inline: 16px;
    }
  `,
})
export class App {
  protected readonly title = signal('first-ng-app');
}
