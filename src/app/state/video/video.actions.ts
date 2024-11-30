import { createAction, props } from '@ngrx/store';

export const getAllVideos = createAction('[Video] load videos');

export const getAllVideosSuccess = createAction(
  '[Product] load videos success',
  props<{ videos: VideoProps[] }>()
);
