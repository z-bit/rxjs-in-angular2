import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './app.root.component';
import { Wrong } from './app.wrong.component';


import { DemoModule } from './demo/demo.module';
import { DemoComponent } from './demo/demo.component';
import { NoContent } from './demo/no-content/no-content';

import { EggheadModule } from './eggheadModule/egghead.module';
import { EggheadComponent } from './eggheadModule/egghead.component';
import { RxjsComponent } from './eggheadModule/rxjsComponent/rxjs.component';
import { Component2Component } from './eggheadModule/component2/conponent2.component';




import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {
      path: '',
      component: RootComponent
  },
  {
      path: 'demo',
      component: DemoComponent
  },
  {
    path: 'egghead',
    component: EggheadComponent
  },
  { path: '**',    component: Wrong },
];
