import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path: 'layout',
    loadChildren: () => import('@brainshark/web/layout').then(p => p.LayoutModule)
  },
  { path: '', redirectTo: 'layout/timer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
