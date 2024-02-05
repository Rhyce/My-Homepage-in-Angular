import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="main">
      <div class="outer">
        <div>
          <div class="inner">
            <h1 class="title-text">Rhyce</h1>
            <div class="links-list">
              <a class="home-link" href="">Projects</a>
              <a class="home-link" href="">Blog</a>
              <a class="home-link" href="">About</a>
              <a class="home-link" href="">LinkedIn</a>
              <a class="home-link" href="">Github</a>
              <a class="home-link" href="">Instagram</a>
            </div>
          </div>
          <div>
            <h2 class="sw-engineer">Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
