import { createAction, createFeatureSelector, createSelector, props } from '@ngrx/store';
import { IAppState } from "./app.state";
import { IRootState } from "./root.reducer";

const rootState = createFeatureSelector<IAppState, IRootState>('root');
export const getProcessing = createSelector(rootState, state => state.processing?.show);
export const getPercent = createSelector(rootState, state => state.percent);
export const getStartTimer = createSelector(rootState, state => state.startTimer);


