import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveCounter = 0;
  inActiveToActiveCounter = 0;
  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter ' + this.activeToInactiveCounter);
  }
  incrementInActiveToActiveCounter() {
    this.inActiveToActiveCounter++;
    console.log('inActiveToActiveCounter ' + this.inActiveToActiveCounter);
  }
}
