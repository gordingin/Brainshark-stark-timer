import { createAction, createFeatureSelector, createSelector, props } from '@ngrx/store';
import { UIProcessing } from '@brainshark/models';
import { IAppState } from './app.state';
import { IRootState } from './root.reducer';

export const Processing= createAction('[MAIN] Processing', props<{ processing: UIProcessing }>());
export const SelectTab= createAction('[MAIN] Select Tab', props<{ index: number }>());
export const StartTimer= createAction('[MAIN] Start Timer');
export const StopTimer= createAction('[MAIN] Stop Timer');
export const TimerAdd= createAction('[MAIN] Timer Add');
export const ResetTimer= createAction('[MAIN] Reset Timer');

const rootState = createFeatureSelector<IAppState, IRootState>('root');
