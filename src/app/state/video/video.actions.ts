import { createAction, props } from '@ngrx/store';

export const getAllVideos = createAction('[Video] load videos');

export const getAllVideosSuccess = createAction(
  '[Product] load videos success',
  props<{ videos: VideoProps[] }>()
);

export const getVideoById = createAction(
  '[Video] load video by id',
  props<{ id: string }>()
);

export const getVideoByIdSuccess = createAction(
  '[Product] load video by id success',
  props<{ video: VideoProps }>()
);
