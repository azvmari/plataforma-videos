import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-video',
  imports: [],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css',
})
export class CardVideoComponent {
  @Input() title: String = '';
  @Input() description: String = '';
}
