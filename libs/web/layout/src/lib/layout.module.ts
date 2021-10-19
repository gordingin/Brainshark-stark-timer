import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { StopwatchModule } from '@brainshark/web/stopwatch';
import { TimerModule } from '@brainshark/web/timer';
import { TimerControlsModule } from '@brainshark/web/timer-controls';

@NgModule({
  imports: [CommonModule,
            LayoutRoutingModule,
            ReactiveFormsModule,
            TimerControlsModule,
            StopwatchModule,
            MatProgressSpinnerModule,
            MatCardModule,
            MatTabsModule,
            MatIconModule,
            TimerModule,
            ],
  declarations: [
    LayoutComponent
  ],
})
export class LayoutModule {}
