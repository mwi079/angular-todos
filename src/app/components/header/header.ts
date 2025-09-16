import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  standalone: true,
  template: `
    <header>
      <nav>
        <span>{{ title() }}</span>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/todos">Todos</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    header {
      display: flex;
      width: 100%;
      padding-inline: 16px;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      background-color: #000;
      color: #fff;
    }

    span {
      font-size: 24px;
      font-weight: bold;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 16px;
    }

    a {
      color: #fff;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #ccc;
      }
    }
  `,
})
export class Header {
  title = signal("Malcolm's angular playground");
}
