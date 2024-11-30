import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  getVideoById,
  getVideoIsFavorited,
  updateVideoData,
} from '../../state/video/video.actions';
import { videoSelectors } from '../../state/video/video.selectors';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  imports: [HeaderComponent, RouterOutlet, AsyncPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
  standalone: true,
})
export class VideoComponent {
  private store = inject(Store);

  count = 0;
  title = 'Título do vídeo';
  description = 'Descrição do vídeo';
  id: string | null = null;
  video = this.store.select(videoSelectors.video);
  isFavorited = this.store.select(videoSelectors.videoIsFavorited);
  private videoSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.store.dispatch(getVideoById({ id: this.id }));
      }
    });

    this.videoSubscription = this.video.subscribe((video) => {
      if (video) {
        this.store.dispatch(
          getVideoIsFavorited({ userId: 1, videoId: video.id })
        );
        this.updateVideoData(video);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.videoSubscription) {
      this.videoSubscription.unsubscribe();
    }
  }

  private updateVideoData(video: VideoProps): void {
    if (this.count > 0) {
      this.videoSubscription.unsubscribe();
      return;
    }

    this.count++;

    this.store.dispatch(
      updateVideoData({
        id: video.id,
        data: { ...video, views: video.views + 1 },
      })
    );
  }
}
