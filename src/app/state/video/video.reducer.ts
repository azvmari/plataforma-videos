import { createReducer, on } from '@ngrx/store';
import { getAllVideos } from './video.actions';

export type VideoState = {
  videos: VideoProps[];
};
export const initialState: VideoState = {
  videos: [],
};

const _videoReducer = createReducer(
  initialState,
  on(getAllVideos, (state) => {
    console.log('get products:', state);
    return { ...state };
  })
);

export const videoReducer = (state: VideoState, action: any) =>
  _videoReducer(state, action);
