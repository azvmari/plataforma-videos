import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost:3000/videos';
  constructor(private httpClient: HttpClient) {}

  getVideos() {
    return this.httpClient.get<VideoProps[]>(this.baseUrl);
  }

  getVideo(id: number) {
    return this.httpClient.get<VideoProps>(`${this.baseUrl}/${id}`);
  }
}
