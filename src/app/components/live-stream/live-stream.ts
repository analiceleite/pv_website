import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-live-stream',
  imports: [CommonModule],
  templateUrl: './live-stream.html',
  styleUrl: './live-stream.scss'
})
export class LiveStream {
  isLiveNow = false;
  nextCulto = 'Domingo às 18h30';
  streamUrl = 'https://youtube.com/live/sua-transmissao'; 

  constructor() {
    this.checkIfLive();
  }

  checkIfLive() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Domingo
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Verifica se é domingo e está no horário do culto (18:30-20:30)
    if (dayOfWeek === 0 && hour >= 18 && (hour < 20 || (hour === 20 && minute <= 30))) {
      this.isLiveNow = true;
    }
  }

  watchLive() {
    window.open(this.streamUrl, '_blank');
  }
}
