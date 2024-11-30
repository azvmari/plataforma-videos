import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getVideoById } from '../../state/video/video.actions';
import { videoSelectors } from '../../state/video/video.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-video',
  imports: [HeaderComponent, RouterOutlet, AsyncPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
  standalone: true,
})
export class VideoComponent {
  private store = inject(Store);

  title = 'Título do vídeo';
  description = 'Descrição do vídeo';
  id: string | null = null;
  video = this.store.select(videoSelectors.video);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.store.dispatch(getVideoById({ id: this.id }));
      }
    });
  }
}
