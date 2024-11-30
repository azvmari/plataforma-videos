import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import {
  getAllVideos,
  getAllVideosSuccess,
  getVideoById,
  getVideoByIdSuccess,
} from './video.actions';
import { VideoService } from '../../service/video.service';

export const getAllVideosEffect = createEffect(
  (actions$ = inject(Actions), videosService = inject(VideoService)) => {
    return actions$.pipe(
      ofType(getAllVideos),
      tap(() => console.log('passou pelo effect')),
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
      tap(() => console.log('passou pelo effect')),
      switchMap(({ id }) =>
        videosService
          .getVideo(id)
          .pipe(map((video) => getVideoByIdSuccess({ video })))
      )
    );
  },
  { functional: true }
);
