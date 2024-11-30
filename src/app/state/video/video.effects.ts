import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import {
  getAllVideos,
  getAllVideosSuccess,
  getVideoById,
  getVideoByIdSuccess,
  updateVideoData,
  updateVideoDataSuccess,
} from './video.actions';
import { VideoService } from '../../service/video.service';

export const getAllVideosEffect = createEffect(
  (actions$ = inject(Actions), videosService = inject(VideoService)) => {
    return actions$.pipe(
      ofType(getAllVideos),
      switchMap(() =>
        videosService
          .getVideos()
          .pipe(map((videos) => getAllVideosSuccess({ videos })))
      )
    );
  },
  { functional: true }
);

export const getVideoByIdEffect = createEffect(
  (actions$ = inject(Actions), videosService = inject(VideoService)) => {
    return actions$.pipe(
      ofType(getVideoById),
      switchMap(({ id }) =>
        videosService
          .getVideo(id)
          .pipe(map((video) => getVideoByIdSuccess({ video })))
      )
    );
  },
  { functional: true }
);

export const updateVideoEffect = createEffect(
  (actions$ = inject(Actions), videosService = inject(VideoService)) => {
    return actions$.pipe(
      ofType(updateVideoData),
      switchMap(({ id, data }) =>
        videosService
          .updateVideoData(id, data)
          .pipe(map((data) => updateVideoDataSuccess({ data })))
      )
    );
  },
  { functional: true }
);
