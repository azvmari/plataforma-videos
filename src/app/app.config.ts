import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducers } from './state/app.reducers';
import { provideEffects } from '@ngrx/effects';
import {
  getAllVideosEffect,
  getFavoritesVideosEffect,
  getVideoByIdEffect,
  getVideoIsFavoritedEffect,
  updateVideoEffect,
} from './state/video/video.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers),
    provideEffects({
      getAllVideosEffect,
      getVideoByIdEffect,
      getFavoritesVideosEffect,
      getVideoIsFavoritedEffect,
      updateVideoEffect,
    }),
    provideHttpClient(),
  ],
};
