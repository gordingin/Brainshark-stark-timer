import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'timer', pathMatch: 'full' },
  {
      path: 'stopwatch',
      loadChildren: () => import('@brainshark/web/stopwatch').then(p => p.StopwatchModule)
    },
    {
      path: 'timer',
      loadChildren: () => import('@brainshark/web/timer').then(p => p.TimerModule)
    },
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
