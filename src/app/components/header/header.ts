import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false;

  menuItems = [
    { label: 'Início', link: '#inicio' },
    { label: 'Rádio', link: '#radio' },
    { label: 'Ao Vivo', link: '#live' },
    { label: 'Fotos', link: '#fotos' },
    { label: 'Grupos', link: '#grupos' },
    { label: 'Contato', link: '#endereco' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
