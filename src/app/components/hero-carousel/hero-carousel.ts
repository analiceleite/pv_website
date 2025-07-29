// hero-carousel.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrls: ['./hero-carousel.scss']
})
export class HeroCarousel {
  image = 'assets/worship.png';
  title = 'Faça Parte da Nossa Família';
  subtitle = 'Uma comunidade de fé, amor e propósito';
  verse = '"Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles." - Mateus 18:20'

}