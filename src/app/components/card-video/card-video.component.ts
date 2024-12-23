import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-video',
  imports: [],
  standalone: true,
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css',
})
export class CardVideoComponent {
  @Input() title: String = '';
  @Input() description: String = '';
  @Input() thumbnailSrc: String = '';
  @Input() id: String = '';
  videoUrl: string = '';

  ngOnInit(): void {
    this.videoUrl = `/video/${this.id}`;
  }
}
