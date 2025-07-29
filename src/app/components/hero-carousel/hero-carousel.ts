// hero-carousel.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrls: ['./hero-carousel.scss']
})
export class HeroCarousel implements OnInit {
  @ViewChild('heroVideo', { static: false }) heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroVideo') heroVideoRef!: ElementRef<HTMLVideoElement>;

  image = 'assets/background_shirlei.jpg';
  title = 'Faça Parte da Nossa Família';
  subtitle = 'Uma comunidade de fé, amor e propósito';
  verse = '"Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles." - Mateus 18:20'

  videoSrc = 'assets/video_home_adoracao_2.mp4';
  videoSrcWebm = 'assets/video_home_adoracao_2.webm';

  private isMobile = false;
  private resizeObserver?: ResizeObserver;

  ngOnInit(): void {
    this.checkMobile();
    this.setupResizeListener();

    const video = this.heroVideoRef?.nativeElement;
    
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.warn('Autoplay bloqueado:', err);
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.isMobile && this.heroVideo) {
      this.setupVideoOptimizations();
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  private setupResizeListener(): void {
    // Usando ResizeObserver para melhor performance
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkMobile();
      });
      this.resizeObserver.observe(document.body);
    } else {
      // Fallback para navegadores mais antigos
      (window as Window).addEventListener('resize', () => {
        this.checkMobile();
      });
    }
  }

  private setupVideoOptimizations(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    // Otimizações para mobile
    video.preload = 'metadata'; // Carrega apenas metadados inicialmente
    video.playsInline = true;
    video.muted = true;
    video.loop = true;

    // Configurações específicas para iOS
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');

    // Evento para garantir que o vídeo seja reproduzido
    video.addEventListener('loadedmetadata', () => {
      this.playVideoSafely(video);
    });

    // Pausa o vídeo quando não está visível (economia de bateria)
    this.setupIntersectionObserver(video);

    // Reduz a qualidade em conexões lentas
    this.handleConnectionSpeed(video);
  }

  private playVideoSafely(video: HTMLVideoElement): void {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Vídeo reproduzindo normalmente');
        })
        .catch((error) => {
          console.warn('Autoplay bloqueado, tentando reproduzir após interação do usuário:', error);
          this.handleAutoplayBlocked(video);
        });
    }
  }

  private handleAutoplayBlocked(video: HTMLVideoElement): void {
    // Cria um listener para a primeira interação do usuário
    const playOnInteraction = () => {
      video.play().catch(console.error);
      // Remove os listeners após a primeira reprodução
      ['touchstart', 'click', 'scroll'].forEach(event => {
        document.removeEventListener(event, playOnInteraction);
      });
    };

    // Adiciona listeners para diferentes tipos de interação
    ['touchstart', 'click', 'scroll'].forEach(event => {
      document.addEventListener(event, playOnInteraction, { once: true, passive: true });
    });
  }

  private setupIntersectionObserver(video: HTMLVideoElement): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (video.paused) {
                this.playVideoSafely(video);
              }
            } else {
              if (!video.paused) {
                video.pause();
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);
    }
  }

  private handleConnectionSpeed(video: HTMLVideoElement): void {
    // Verifica a velocidade de conexão (se disponível)
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;

      if (connection && connection.effectiveType) {
        // Em conexões lentas, define qualidade menor
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          video.style.filter = 'blur(1px)'; // Adiciona blur para mascarar baixa qualidade
          video.preload = 'none'; // Não pré-carrega em conexões muito lentas
        }
      }
    }
  }

  // Método para ser chamado quando o usuário clica nos botões CTA
  onCtaClick(section: string): void {
    // Remove o foco do vídeo para evitar controles aparecendo
    if (this.heroVideo?.nativeElement) {
      this.heroVideo.nativeElement.blur();
    }

    // Lógica de navegação
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Getter para verificar se deve mostrar vídeo
  get shouldShowVideo(): boolean {
    return this.isMobile;
  }

  // Getter para verificar se deve mostrar imagem
  get shouldShowImage(): boolean {
    return !this.isMobile;
  }
}