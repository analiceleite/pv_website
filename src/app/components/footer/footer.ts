import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/pages/Comunidade%20Crist%C3%A3%20Palavra%20da%20Vida/522804331174409/#',
      icon: 'fab fa-facebook'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/comunidadepalavradavida/',
      icon: 'fab fa-instagram'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@comunidadepalavradavida1632',
      icon: 'fab fa-youtube'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5547999253311',
      icon: 'fab fa-whatsapp'
    }
  ];

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
