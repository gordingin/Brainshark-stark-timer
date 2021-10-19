import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TimePipe } from '@brainshark/models';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: TimerComponent }
    ]),],
  declarations: [
    TimerComponent,
    TimePipe
  ],
  exports: [
    TimerComponent
  ],
})
export class TimerModule {}
