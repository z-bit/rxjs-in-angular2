import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EggheadComponent } from './egghead.component';
import { RxjsComponent } from './rxjsComponent/rxjs.component';
import { ComponentsComponent } from './componentsComponent/components.component';
import { DependencyComponent } from './dependencyComponent/dependency.component';
import { RouterComponent } from './routerComponent/router.component';


const routes: Routes = [
    {
        path: 'egghead',
        component: EggheadComponent,
        children: [
            { path: 'rxjs', component: RxjsComponent },
            { path: 'components', component: ComponentsComponent },
            { path: 'dependency', component: DependencyComponent },
            { path: 'router', component: RouterComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
