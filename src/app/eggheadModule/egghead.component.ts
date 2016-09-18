import { Component } from '@angular/core';

@Component({
    selector: 'egghead',

    template: `<div>
        <h1>Courses by Egghead</h1>
        <router-outlet></router-outlet>

    </div>`
})
export class EggheadComponent {}
