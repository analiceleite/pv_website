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

  instagramStats = {
    followers: '1.3K',
    quality: 'High'
  };

  facebookStats = {
    followers: '167',
    quality: 'High'
  };

  openRadio(): void {
    console.log('Abrindo rádio...');
    window.open('https://radiorefugio.com.br', '_blank');
  }

  openYoutube(): void {
    console.log('Abrindo YouTube...');
    window.open('https://www.youtube.com/@comunidadepalavradavida1632/streams', '_blank');
  }

  openInstagram(): void {
    console.log('Abrindo Instagram...');
    window.open('https://www.instagram.com/comunidadepalavradavida/', '_blank');
  }

  openFacebook(): void {
    console.log('Abrindo Facebook...');
    window.open('https://www.facebook.com/pages/Comunidade%20Crist%C3%A3%20Palavra%20da%20Vida/522804331174409/#', '_blank');
  }
}
