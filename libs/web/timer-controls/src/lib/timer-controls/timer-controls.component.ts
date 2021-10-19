import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseComponent  } from '@brainshark/models';
import { getStartTimer, IAppState, StartTimer, StopTimer, ResetTimer, getPercent} from '@brainshark/web/root-store';
import { select, Store } from '@ngrx/store';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'brainshark-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent extends BaseComponent implements OnInit {

  @ViewChild('alarm',{static: true}) alarmElementRef?: ElementRef;
  alarm?: HTMLAudioElement;
  
  constructor(private store: Store<IAppState>) { 
    super();
    
  }
  startTimer$ = this.store.pipe(select(getStartTimer));

  ngOnInit(): void {
    this.alarm = this.alarmElementRef?.nativeElement;

  }

  startStop():void {
    this.store.pipe(select(getPercent), takeUntil(this.destroy$)).subscribe(t => {
    if( t == 100)
       this.alarm?.play();
    });

    this.store.pipe(select(s => s.root), take(1), takeUntil(this.destroy$)).subscribe(t => {
      if(t.tab == 0)
      {
        if(t.startTimer == false)
        {
          this.store.dispatch(StartTimer());
          console.log("StartTimer")
        }
        else if(t.startTimer == true)
        {
          console.log("StopTimer")
          this.store.dispatch(StopTimer());
          this.alarm?.pause();
        }
      }
    })
    
  }

  reset() {
    this.store.pipe(select(s => s.root.tab), take(1), takeUntil(this.destroy$)).subscribe(tab => {
      if(tab == 0)
      {
        this.store.dispatch(ResetTimer());
        this.alarm?.pause();
      }
    })
  }
}