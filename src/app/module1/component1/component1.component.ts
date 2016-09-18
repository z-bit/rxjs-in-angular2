import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { HOUR, SECOND, ADVANCE, RECALL } from '../../app.store';
import { ClockComponent } from './clock/clock.component';





@Component({
    selector: 'component1',
    directives: [ClockComponent],
    template: `<div>
        <h2>RxJS in Angular 2</h2>
        <input #inputNum type="number" value="0">
        <button (click)="click$.next(inputNum.value)">Update</button>
        <clock [time]="time | async"></clock>

        <div
            (click)="person$.next(person)"
            *ngFor="let person of people | async">
            {{person.name}} is in {{person.time | date:'HH:mm:ss'}}
        </div>
        <button (click)="recall$.next()">Recall</button>
    </div>`
})
export class Component1Component {
    time;
    people;

    click$ = new Subject()
        .map(
            (value) => ({type: HOUR, payload: parseInt(value)})
        );

    seconds$ = Observable
        .interval(1000)
        .mapTo({type: SECOND, payload: 1});

    person$ = new Subject()
        .map(
            (value) => ({type: ADVANCE, payload: value})
        );

    recall$ = new Subject();

    constructor (store: Store) {

        // 5.
        this.time = store.select('clock');
        this.people = store.select('people');

        Observable
            .merge(
                this.click$,
                this.seconds$,
                this.person$,
                this.recall$
                    .withLatestFrom(this.time, (_,y) => y)
                    .map(
                        (time) => ({type: RECALL, payload: time})
                    )
            )
            // .subscribe( (action) => {store.dispatch(action)} )
            // shorter
            .subscribe(store.dispatch.bind(store))
        ;

        // 4.
        /*
        this.clock = Observable
                .merge(
                    this.click$.mapTo('hour'),
                    Observable.interval(1000).mapTo('second')
                )
                //.map(() => new Date())
                .startWith(new Date())
                .scan((accumulated, current) => {
                    const date = new Date(accumulated.getTime());
                    if (current === 'second') {
                        date.setSeconds(date.getSeconds() + 1);
                    }
                    if (current === 'hour') {
                        date.setHours(date.getHours() + 1);
                    }
                    return date;
                })
        ;
        */

        // 2.
        // async pipe has a built in subscribe
        /*
         this.clock.subscribe(x => {
         this.clock2 = x;
         console.log(x);
         });
         */

        // 1.
        // this.clock = this.click$.map(() => new Date());
    }
}
