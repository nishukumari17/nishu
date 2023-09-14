import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}