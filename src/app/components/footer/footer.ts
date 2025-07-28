import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/palavradavida',
      icon: 'fab fa-facebook'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/palavradavida',
      icon: 'fab fa-instagram'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@palavradavida',
      icon: 'fab fa-youtube'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      icon: 'fab fa-whatsapp'
    }
  ];

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
