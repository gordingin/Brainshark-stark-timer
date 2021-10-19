import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: StopwatchComponent }
    ]),
  ],
  declarations: [
    StopwatchComponent
  ],
  exports: [
    StopwatchComponent
  ],
})
export class StopwatchModule {}
