import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteProps } from '../@types/favorites';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost:3000/videos';
  private favoritesUrl = 'http://localhost:3000/favorites';
  constructor(private httpClient: HttpClient) {}

  getVideos() {
    return this.httpClient.get<VideoProps[]>(this.baseUrl);
  }

  getVideo(id: string) {
    return this.httpClient.get<VideoProps>(`${this.baseUrl}/${id}`);
  }

  getFavoritesVideos(userId: number) {
    return this.httpClient
      .get<FavoriteProps[]>(this.favoritesUrl, {
        params: { userId },
      })
      .pipe(
        switchMap((favorites) => {
          const favoriteVideoIds = favorites.map(
            (favorite) => favorite.videoId
          );

          return this.getVideos().pipe(
            map((videos) =>
              videos.filter((video) => favoriteVideoIds.includes(video.id))
            )
          );
        })
      );
  }

  updateVideoData(id: string, data: VideoProps) {
    return this.httpClient.put<VideoProps>(`${this.baseUrl}/${id}`, data);
  }
}
