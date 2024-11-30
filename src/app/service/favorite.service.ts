import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FavoriteProps } from '../@types/favorites';
import { map, switchMap } from 'rxjs';
import { VideoService } from './video.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private baseUrl = 'http://localhost:3000/favorites';
  private videoService = inject(VideoService);

  constructor(private httpClient: HttpClient) {}

  getFavorite(userId: number, videoId: string) {
    return this.httpClient
      .get<FavoriteProps[]>(`${this.baseUrl}`, {
        params: { userId, videoId },
      })
      .pipe(
        map((data) => {
          return data.length !== 0;
        })
      );
  }

  getFavoritesVideos(userId: number) {
    return this.httpClient
      .get<FavoriteProps[]>(this.baseUrl, {
        params: { userId },
      })
      .pipe(
        switchMap((favorites) => {
          const favoriteVideoIds = favorites.map(
            (favorite) => favorite.videoId
          );

          return this.videoService
            .getVideos()
            .pipe(
              map((videos) =>
                videos.filter((video) => favoriteVideoIds.includes(video.id))
              )
            );
        })
      );
  }
}
