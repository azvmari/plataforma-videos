import { createReducer, on } from '@ngrx/store';
import {
  getAllVideos,
  getAllVideosSuccess,
  getFavoritesVideos,
  getFavoritesVideosSuccess,
  getVideoById,
  getVideoByIdSuccess,
  updateVideoData,
  updateVideoDataSuccess,
} from './video.actions';

export type VideoState = {
  videos: VideoProps[];
  favorites: VideoProps[];
  videoSelected: VideoProps | null;
};
export const initialState: VideoState = {
  videos: [],
  favorites: [],
  videoSelected: null,
};

const _videoReducer = createReducer(
  initialState,
  on(getAllVideos, (state) => {
    return { ...state };
  }),
  on(getAllVideosSuccess, (state, { videos }) => {
    return { ...state, videos };
  }),
  on(getVideoById, (state, { id }) => {
    return { ...state, videoSelected: null };
  }),
  on(getVideoByIdSuccess, (state, { video }) => {
    return { ...state, videoSelected: video };
  }),
  on(getFavoritesVideos, (state, { userId }) => {
    return { ...state, favorites: [] };
  }),
  on(getFavoritesVideosSuccess, (state, { videos }) => {
    return { ...state, favorites: videos };
  }),
  on(updateVideoData, (state, { id }) => {
    return { ...state, videoSelected: null };
  }),
  on(updateVideoDataSuccess, (state, { data }) => {
    return { ...state, videoSelected: data };
  })
);

export const videoReducer = (state: any, action: any) =>
  _videoReducer(state, action);
