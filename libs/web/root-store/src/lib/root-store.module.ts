import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { metaReducers, reducers } from './ngrx/app.state';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const DevImport = [StoreDevtoolsModule.instrument({
  maxAge: 25, // Retains last 25 states
  logOnly: true // Restrict extension to log-only mode
})];
@NgModule({
  imports: [CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    ...DevImport,
  ]})
export class RootStoreModule {
}
