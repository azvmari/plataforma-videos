import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-video',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  title = 'Título do vídeo';
  description = 'Descrição do vídeo';
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
}
