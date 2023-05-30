import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(()=> this.counter()*2)

  constructor() {
    effect(()=>console.log(this.counter()))
  }

  increment() {
    this.counter.update(oldValue => oldValue+1);

    //update, set, mutate
    // update takes functions where we can update value by using old value
    // set directly sets to value
    // mutate is same as update but it creates new value rather then updating previous value
    this.actions.mutate(oldValue=>oldValue.push('INCREMENT'));
  }

  decrement() {
    this.counter.update(oldValue => oldValue-1);
    this.actions.update(oldValue => [...oldValue, 'DECREMENT']);
  }
}
