import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-section',
  imports: [],
  templateUrl: './radio-section.html',
  styleUrl: './radio-section.scss'
})
export class RadioSection {
   youtubeStats = {
    subscribers: '1.2K',
    quality: 'HD'
  };

  openRadio(): void {
    console.log('Abrindo rádio...');
    window.open('https://radiorefugio.com.br', '_blank');
  }

  openYoutube(): void {
    console.log('Abrindo YouTube...');
    // Implementar abertura do YouTube
    // window.open('https://youtube.com/channel/sua-igreja', '_blank');
  }
}
