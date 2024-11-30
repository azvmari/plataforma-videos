import { createAction, props } from '@ngrx/store';

export const getAllVideos = createAction('[Video] load videos');

export const getAllVideosSuccess = createAction(
  '[Video] load videos success',
  props<{ videos: VideoProps[] }>()
);

export const getVideoById = createAction(
  '[Video] load video by id',
  props<{ id: string }>()
);

export const getVideoByIdSuccess = createAction(
  '[Video] load video by id success',
  props<{ video: VideoProps }>()
);

export const getFavoritesVideos = createAction(
  '[Video] load user favorite videos',
  props<{ userId: number }>()
);

export const getFavoritesVideosSuccess = createAction(
  '[Video] load user favorite videos success',
  props<{ videos: VideoProps[] }>()
);

export const updateVideoData = createAction(
  '[Video]: update video data',
  props<{ id: string; data: VideoProps }>()
);

export const updateVideoDataSuccess = createAction(
  '[Video]: update video data success',
  props<{ data: VideoProps }>()
);
