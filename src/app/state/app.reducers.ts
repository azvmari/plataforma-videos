import { ActionReducerMap } from '@ngrx/store';
import { StateProps } from '../@types/state';
import { videoReducer } from './video/video.reducer';

export const appReducers: ActionReducerMap<StateProps> = {
  counter: videoReducer,
};
