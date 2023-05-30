import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions: string[] = [];
  counter = signal(0);

  increment() {
    this.counter.update(oldValue => oldValue+1);

    //update, set, mutate
    // update takes functions where we can update value by using old value
    // set directly sets to value
    // mutate is same as update but it creates new value rather then updating previous value
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update(oldValue => oldValue-1);
    this.actions.push('DECREMENT');
  }
}
