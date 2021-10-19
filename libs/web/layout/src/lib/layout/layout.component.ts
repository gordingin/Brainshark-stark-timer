import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getStartTimer, Processing, SelectTab } from '@brainshark/web/root-store';
import { getProcessing, IAppState } from '@brainshark/web/root-store';

@Component({
  selector: 'brainshark-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  processing$ = this.store.pipe(select(getProcessing));
  startTimer$ = this.store.pipe(select(getStartTimer));
  
  constructor(private store: Store<IAppState>,) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(Processing({ processing: { show : false} }));
    }, 1000);
  }

  tabChange(selectedTabIndex: number) {
    this.store.dispatch(SelectTab({ index: selectedTabIndex }));
  }
}
