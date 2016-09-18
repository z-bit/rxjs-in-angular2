/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <md-toolbar color="primary">
      <md-icon (mouseover)="start.open()">menu</md-icon>
      <span>&nbsp;&nbsp;{{ title }}</span>
      <span class="fill"></span>
      <a md-button
          *ngFor="let link of links"
          [routerLink]=" link.link ">
            {{ link.caption }}
      </a>
    </md-toolbar>

    <md-sidenav-layout class="full-height">
      <md-sidenav #start (click)="start.close()" (mouseleave)="start.close()">
        <a md-button [routerLink]=" ['./'] " (click)="rootClick()">
          <img src="assets/img/angular-logo.png" height="20" width="20">
          Root
        </a><br>
        <a md-button [routerLink]=" ['./demo'] " (click)="demoClick()">
          <img src="assets/img/angular-logo.png" height="20" width="20">
          Demo
        </a><br>
        <a md-button [routerLink]=" ['./module1'] " (click)="module1Click()">
          <img src="assets/img/angular-logo.png" height="20" width="20">
          @ngrx/store
        </a><br>

        <hr>
      </md-sidenav>
      <main>
        <router-outlet></router-outlet>
      </main>
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <footer>
        <span id="footerText">WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
        <img [src]="angularclassLogo" width="6%">
      </footer>
    </md-sidenav-layout>
  `
})
export class App {
  links = [];
  title: string = 'ac5m';
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  demoClick() {
    this.title = 'Demo';
    this.links = [
      { caption: 'Index', link: 'demo/home' },
      { caption: 'Detail', link: 'demo/detail' },
      { caption: 'About', link: 'demo/about' },
      { caption: 'Home', link: 'demo' }
    ];
  }

  module1Click() {
    this.title = 'Module1';
    this.links = [
      { caption: 'Component1', link: 'module1/component1' },
      { caption: 'Component2', link: 'module1/component2' },
      { caption: 'Module1-Home', link: 'module1' }
    ];
  }

  rootClick() {
    this.title = 'ac5m';
    this.links = [];
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
