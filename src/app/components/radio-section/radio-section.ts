import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-section',
  imports: [],
  templateUrl: './radio-section.html',
  styleUrl: './radio-section.scss'
})
export class RadioSection {
  youtubeStats = {
    subscribers: '1.4K',
    quality: 'HD'
  };

  openRadio(): void {
    console.log('Abrindo rádio...');
    window.open('https://radiorefugio.com.br', '_blank');
  }

  openYoutube(): void {
    console.log('Abrindo YouTube...');
    window.open('https://www.youtube.com/@comunidadepalavradavida1632', '_blank');
  }
}
