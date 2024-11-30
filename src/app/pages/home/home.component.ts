import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CardVideoComponent } from '../../components/card-video/card-video.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponent, CardVideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'OnPlay';
}
