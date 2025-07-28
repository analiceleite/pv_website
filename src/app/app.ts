import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Adress } from './components/adress/adress';
import { FamiliarGroups } from './components/familiar-groups/familiar-groups';
import { Footer } from './components/footer/footer';
import { HeroCarousel } from './components/hero-carousel/hero-carousel';
import { LiveStream } from './components/live-stream/live-stream';
import { PhotoDrive } from './components/photo-drive/photo-drive';
import { RadioSection } from './components/radio-section/radio-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Adress, FamiliarGroups, Footer, HeroCarousel, LiveStream, PhotoDrive, RadioSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Igreja Palavra da Vida');
}
