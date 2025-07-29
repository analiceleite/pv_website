import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

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
    { label: 'Transmissões', link: '#midia' },
    { label: 'Agenda', link: '#agenda' },
    { label: 'Fotos', link: '#fotos' },
    { label: 'Grupos', link: '#grupos' },
    { label: 'Ofertas', link: '#ofertas' },
    { label: 'Contato', link: '#endereco' }
  ];

  currentSection: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + 100;

    for (let item of this.menuItems) {
      const sectionId = item.link.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.currentSection = item.link;
          break;
        }
      }
    }
  }

  isActive(link: string): boolean {
    return this.currentSection === link;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
