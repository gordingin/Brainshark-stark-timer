import {Component, OnDestroy} from '@angular/core';

// libs
import {Subject} from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  template: ''
})

export abstract class BaseComponent implements OnDestroy {
  private _destroy$: Subject<any> | undefined;

  get destroy$() {
    if (!this._destroy$) {
      this._destroy$ = new Subject();
    }
    return this._destroy$;
  }

  ngOnDestroy() {
    if (this._destroy$) {
      this._destroy$.next(true);
      this._destroy$.complete();
    }
  }

}
