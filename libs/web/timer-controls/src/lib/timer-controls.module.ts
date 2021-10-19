import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';

@NgModule({
  imports: [CommonModule,MatButtonModule],
  declarations: [
    TimerControlsComponent
  ],
  exports: [
    TimerControlsComponent
  ],
})
export class TimerControlsModule {}
