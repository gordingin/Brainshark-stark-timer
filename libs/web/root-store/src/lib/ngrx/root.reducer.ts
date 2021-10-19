import { Action, createReducer, on } from '@ngrx/store';
import { UIProcessing } from '@brainshark/models';
import * as rootAction from './root.actions';

export const TIMERMAX =300;
export interface IRootState {
  processing: UIProcessing | null;
  percent: number;
  tab: number;
  startTimer: boolean;
  timerValue: number;
}

const initialState: IRootState = {
  processing: { show: true},
  percent: 0,
  tab: 0,
  startTimer: false,
  timerValue: TIMERMAX
};

export function RootReducer(state: IRootState = initialState, action: Action) {
  return _rootReducer(state, action);
}

const _rootReducer = createReducer(initialState,
  
  on(rootAction.SelectTab, (state, data) => {
    return {
      ...state,
      tab: data.index
    };
  }),
  on(rootAction.Processing, (state, processing) => {
    return {
      ...state,
      processing: processing.processing
    };
  }),
  on(rootAction.StartTimer, (state) => {
    return {
      ...state,
      startTimer: true,
    };
  }),
  on(rootAction.StopTimer, (state) => {
    return {
      ...state,
      startTimer: false,
    };
  }),
  on(rootAction.TimerAdd, (state) => {
    let value = state.percent +  (100 / state.timerValue);
    return {
      ...state,
      percent: value
      
    };
  }),
  on(rootAction.ResetTimer, (state) => {
    return {
      ...state,
      startTimer: false,
      percent: 0
      
    };
  }),
);
