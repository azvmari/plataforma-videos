import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import {
  getAllVideos,
  getAllVideosSuccess,
  getFavoritesVideos,
  getFavoritesVideosSuccess,
  getVideoById,
  getVideoByIdSuccess,
  getVideoIsFavorited,
  getVideoIsFavoritedSuccess,
  updateVideoData,
  updateVideoDataSuccess,
} from './video.actions';
import { VideoService } from '../../service/video.service';
import { FavoriteService } from '../../service/favorite.service';

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

export const getFavoritesVideosEffect = createEffect(
  (actions$ = inject(Actions), favoriteService = inject(FavoriteService)) => {
    return actions$.pipe(
      ofType(getFavoritesVideos),
      switchMap(({ userId }) =>
        favoriteService
          .getFavoritesVideos(userId)
          .pipe(map((videos) => getFavoritesVideosSuccess({ videos })))
      )
    );
  },
  { functional: true }
);

export const getVideoIsFavoritedEffect = createEffect(
  (actions$ = inject(Actions), favoriteService = inject(FavoriteService)) => {
    return actions$.pipe(
      ofType(getVideoIsFavorited),
      switchMap(({ userId, videoId }) =>
        favoriteService
          .getFavorite(userId, videoId)
          .pipe(
            map((isFavorited) => getVideoIsFavoritedSuccess({ isFavorited }))
          )
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
