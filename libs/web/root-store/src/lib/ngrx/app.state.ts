import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as rootReducer from './root.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface IAppState {
  root: rootReducer.IRootState;
}

export const reducers: ActionReducerMap<IAppState> = {
  root: rootReducer.RootReducer
};


export function localStorageSyncReducer(r: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [{ root: ['root'] }],
    rehydrate: true,
    checkStorageAvailability: true
  })(r);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
