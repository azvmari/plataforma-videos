import { createReducer, on } from '@ngrx/store';
import { getAllVideos, getAllVideosSuccess } from './video.actions';

export type VideoState = {
  videos: VideoProps[];
};
export const initialState: VideoState = {
  videos: [],
};

const _videoReducer = createReducer(
  initialState,
  on(getAllVideos, (state) => {
    return { ...state };
  }),
  on(getAllVideosSuccess, (state, { videos }) => {
    return { ...state, videos };
  })
);

export const videoReducer = (state: any, action: any) =>
  _videoReducer(state, action);
