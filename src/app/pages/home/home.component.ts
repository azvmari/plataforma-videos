import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CardVideoComponent } from '../../components/card-video/card-video.component';
import { Store } from '@ngrx/store';
import { getAllVideos } from '../../state/video/video.actions';
import { videoSelectors } from '../../state/video/video.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponent, CardVideoComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent implements OnInit {
  title = 'OnPlay';

  private store = inject(Store);
  videos = this.store.select(videoSelectors.videos);

  ngOnInit(): void {
    this.store.dispatch(getAllVideos());
  }
}
