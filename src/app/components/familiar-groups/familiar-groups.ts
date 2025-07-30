import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FamiliarGroup } from '../../services/interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-familiar-groups',
  imports: [CommonModule, FormsModule],
  templateUrl: './familiar-groups.html',
  styleUrl: './familiar-groups.scss'
})

export class FamiliarGroups implements AfterViewInit {
  @ViewChild('gruposContainer', { static: false }) gruposContainer!: ElementRef;

  searchTerm: string = '';
  current_page: number = 1;
  items_per_page: number = 4;

  // Variáveis para controle do swipe
  private startX: number = 0;
  private startY: number = 0;
  private isSwiping: boolean = false;
  readonly minSwipeDistance: number = 50;

  groups: FamiliarGroup[] = [
    {
      name: 'GF Déboras',
      address: 'Bairro Itaum',
      hour: 'Quartas-feiras às 20h00',
      focus: 'Mulheres',
      lider: 'Beatriz e Juliana',
      phone: '5547988755393'
    },
    {
      name: 'GF Renascer',
      address: 'Bairro Itinga',
      hour: 'Terças-feiras às 19h30',
      focus: 'Homens',
      lider: 'Pr Cristiano e DC Roberto',
      phone: '5547984959569'
    },
    {
      name: 'GF Mulheres Invictas',
      address: 'Bairro Bucarein',
      hour: 'Quintas-feiras às 20h00',
      focus: 'Mulheres',
      lider: 'Andressa e Luciana',
      phone: '5547988856678'
    },
    {
      name: 'GF Lançando as Redes',
      address: 'Bairro Fátima',
      hour: 'Quartas-feiras às 19h30',
      focus: 'Misto',
      lider: 'Bruna',
      phone: '5547991520857'
    },
    {
      name: 'GF Restaurados',
      address: 'Bairro Fátima',
      hour: 'Quartas-feiras às 19h30',
      focus: 'Misto',
      lider: 'Pr Airson, Rodrigo e Sabrina',
      phone: '5547999571858'
    },
    {
      name: 'GF Reconstruir',
      address: 'Bairro Fátima',
      hour: 'Quartas-feiras',
      focus: 'Misto',
      lider: 'Miss Mari e Anésio',
      phone: '5547992236081'
    },
    {
      name: 'GF Transformar',
      address: 'Bairro Fátima',
      hour: 'Sextas-feiras às 20h00',
      focus: 'Meninas',
      lider: 'Gabriela, Brendha e Rebeca',
      phone: '5547992673547'
    },
    {
      name: 'GF Resgatados',
      address: 'Bairro Fátima',
      hour: 'Sábados',
      focus: 'Misto',
      lider: 'Alex e Gisele às 19h00',
      phone: '5547991666124'
    },
    {
      name: 'GF Fogo Nunca Apaga',
      address: 'Bairro Itaum',
      hour: 'Terças ou quarta-feiras',
      focus: 'Misto',
      lider: 'Fernando e John',
      phone: '5547997640645'
    },
    {
      name: 'GF Mulheres Fortes',
      address: 'Bairro Adhemar Garcia',
      hour: 'Quartas-feiras',
      focus: 'Mulheres',
      lider: 'Sandra e Franci',
      phone: '5547984831202'
    },
    {
      name: 'GF Valentes de Davi',
      address: 'Bairro Fátima',
      hour: 'Quartas-feiras às 19h00',
      focus: 'Homens',
      lider: 'Tel e Leandro',
      phone: '5547997300742'
    },
    {
      name: 'GF Floresça',
      address: 'Bairro Ulisses Guimarães',
      hour: 'Terças-feiras às 20h00',
      focus: 'Mulheres',
      lider: 'Jossi e Giseli',
      phone: '5547984389047'
    },
    {
      name: 'GF Alfa e Ômega',
      address: 'Bairro Jarivatuba',
      hour: 'Quintas-feiras',
      focus: 'Misto',
      lider: 'Carlos e Ozana',
      phone: '5547996797094'
    },
    {
      name: 'GF Dorcas',
      address: 'Bairro Floresta',
      hour: 'Quintas-feiras às 19h30',
      focus: 'Mulheres',
      lider: 'Miss Luciana e Arlete',
      phone: '5547999954554'
    }
  ];

  ngAfterViewInit() {
    this.setupSwipeListeners();
  }

  get paginatedGroups(): FamiliarGroup[] {
    const filtered = this.filteredGroups();
    const start = (this.current_page - 1) * this.items_per_page;
    return filtered.slice(start, start + this.items_per_page);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredGroups().length / this.items_per_page);
  }

  getFocusClass(focus: string) {
    switch (focus) {
      case "Mulheres": return "foco-mulheres"
      case "Homens": return "foco-homens"
      case "Meninas": return "foco-adolescentes"
      default: return "foco-misto"
    }
  }

  filteredGroups(): FamiliarGroup[] {
    if (!this.searchTerm.trim()) return this.groups;

    this.current_page = 1;

    const term = this.searchTerm.toLowerCase();
    return this.groups.filter(grupo =>
      grupo.name.toLowerCase().includes(term) ||
      grupo.address.toLowerCase().includes(term) ||
      grupo.hour.toLowerCase().includes(term) ||
      grupo.focus.toLowerCase().includes(term) ||
      grupo.lider.toLowerCase().includes(term)
    );
  }

  // Métodos para navegação de páginas
  previousPage() {
    if (this.current_page > 1) {
      this.current_page--;
    }
  }

  nextPage() {
    if (this.current_page < this.totalPages) {
      this.current_page++;
    }
  }

  // Setup dos listeners de swipe
  private setupSwipeListeners() {
    if (!this.gruposContainer) return;

    const container = this.gruposContainer.nativeElement;

    // Touch events
    container.addEventListener('touchstart', (e: TouchEvent) => this.handleTouchStart(e), { passive: true });
    container.addEventListener('touchmove', (e: TouchEvent) => this.handleTouchMove(e), { passive: true });
    container.addEventListener('touchend', (e: TouchEvent) => this.handleTouchEnd(e), { passive: true });

    // Mouse events para desktop (opcional)
    container.addEventListener('mousedown', (e: MouseEvent) => this.handleMouseStart(e));
    container.addEventListener('mousemove', (e: MouseEvent) => this.handleMouseMove(e));
    container.addEventListener('mouseup', (e: MouseEvent) => this.handleMouseEnd(e));
    container.addEventListener('mouseleave', (e: MouseEvent) => this.handleMouseEnd(e));
  }

  // Touch handlers
  private handleTouchStart(e: TouchEvent) {
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
    this.isSwiping = true;
  }

  private handleTouchMove(e: TouchEvent) {
    if (!this.isSwiping) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = Math.abs(currentX - this.startX);
    const diffY = Math.abs(currentY - this.startY);

    // Se o movimento vertical for maior que horizontal, não é um swipe horizontal
    if (diffY > diffX) {
      this.isSwiping = false;
    }
  }

  private handleTouchEnd(e: TouchEvent) {
    if (!this.isSwiping) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = this.startX - endX;

    if (Math.abs(diffX) > this.minSwipeDistance) {
      if (diffX > 0) {
        // Swipe para esquerda - próxima página
        this.nextPage();
      } else {
        // Swipe para direita - página anterior
        this.previousPage();
      }
    }

    this.isSwiping = false;
  }

  // Mouse handlers (opcional para desktop)
  private handleMouseStart(e: MouseEvent) {
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.isSwiping = true;
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.isSwiping) return;

    const diffX = Math.abs(e.clientX - this.startX);
    const diffY = Math.abs(e.clientY - this.startY);

    if (diffY > diffX) {
      this.isSwiping = false;
    }
  }

  private handleMouseEnd(e: MouseEvent) {
    if (!this.isSwiping) return;

    const diffX = this.startX - e.clientX;

    if (Math.abs(diffX) > this.minSwipeDistance) {
      if (diffX > 0) {
        this.nextPage();
      } else {
        this.previousPage();
      }
    }

    this.isSwiping = false;
  }

  // Método para verificar se é dispositivo móvel
  get isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}