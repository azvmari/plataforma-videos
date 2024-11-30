import { Routes } from '@angular/router';
import { VideoComponent } from './pages/video/video.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'favorites', component: FavoritesComponent },
];
