import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Address } from './components/address/address';
import { FamiliarGroups } from './components/familiar-groups/familiar-groups';
import { Footer } from './components/footer/footer';
import { HeroCarousel } from './components/hero-carousel/hero-carousel';
import { AnualSchedule } from './components/anual-schedule/live-stream';
import { PhotoDrive } from './components/photo-drive/photo-drive';
import { RadioSection } from './components/radio-section/radio-section';
import { Contribution } from './components/contribution/contribution';

@Component({
  selector: 'app-root',
  imports: [Header, Address, FamiliarGroups, Footer, HeroCarousel, AnualSchedule, PhotoDrive, RadioSection, Contribution],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Igreja Palavra da Vida');
}
