import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routing } from './egghead.routes';

import { EggheadComponent } from './egghead.component';
import { RxjsComponent } from './rxjsComponent/rxjs.component';
import { ComponentsComponent } from './componentsComponent/components.component';
import { DependencyComponent } from './dependencyComponent/dependency.component';
import { RouterComponent } from './routerComponent/router.component';



@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        EggheadComponent,
        RxjsComponent,
        ComponentsComponent,
        DependencyComponent,
        RouterComponent
    ],
    exports: [
        EggheadComponent
    ]
})
export class EggheadModule {}
