import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPercent, getStartTimer, IAppState ,TimerAdd} from '@brainshark/web/root-store';
import { BaseComponent  } from '@brainshark/models';
import { Observable, of, timer } from 'rxjs';
import { takeUntil, scan, takeWhile, filter, tap, take } from 'rxjs/operators';

@Component({
  selector: 'brainshark-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent extends BaseComponent implements OnInit {
  @Input() active = false;
  timerValue = 0;
  interval$: Observable<number> = of(this.timerValue);
  percent$ = this.store.pipe(select(getPercent));
  constructor(private store: Store<IAppState>,) { 
    super();

  }
 
  ngOnInit(): void {

    this.store.pipe(select(s => s.root.timerValue),take(1), takeUntil(this.destroy$)).subscribe((_timerValue) =>{
      // pull value from store
      this.timerValue = _timerValue;
    })

    this.store.pipe(select(getPercent),takeUntil(this.destroy$)).subscribe(t=> {
      if(t == 0)
      {
        // reset value
        this.interval$ = of(this.timerValue);
      }
    });
    


    this.store.pipe(select(getStartTimer),takeUntil(this.destroy$)).subscribe((startstop) =>{
      if(startstop=== true) // if true, start timer
      {
        this.interval$ = timer(0, 1000).pipe(
          filter(() => this.active),
          scan(acc => --acc, this.timerValue),
          tap(() => { this.store.dispatch(TimerAdd());}),
          takeWhile(x => x >= 0),
        );
      }
      
    })    
    
    
    

  }

}
