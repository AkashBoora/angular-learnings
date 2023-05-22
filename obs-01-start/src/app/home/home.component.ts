import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { count } from 'rxjs-compat/operator/count';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count > 20){
          observer.error('Count greater then 20');
          // observer.complete();
        }
        count++;
      }, 1000);
    });
    
    this.firstObsSubscription = customIntervalObservable.pipe(filter((data:number) => {
      return data<2 || data>6;
    }),map((data:number) => {
      return "Round: "+(data+1); 
    }))
    .subscribe(data => {
      console.log(data);
    }, error => {
      alert(error);
    }, () => {
      alert('completed');
    });
  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }
}
