import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Store } from '@ngrx/store';
import { videoSelectors } from '../../state/video/video.selectors';
import { getAllVideos } from '../../state/video/video.actions';
import { AsyncPipe } from '@angular/common';
import { CardVideoComponent } from '../../components/card-video/card-video.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HeaderComponent, CardVideoComponent, AsyncPipe, RouterOutlet],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  title = 'OnPlay | Favoritos';

  private store = inject(Store);
  videos = this.store.select(videoSelectors.videos);

  ngOnInit(): void {
    this.store.dispatch(getAllVideos());
  }
}
