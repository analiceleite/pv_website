import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adress',
  imports: [CommonModule],
  templateUrl: './adress.html',
  styleUrl: './adress.scss'
})
export class Adress {
  adress = {
    street: 'Rua Fátima, 2597',
    neighborhood: 'Fátima',
    city: 'Joinville',
    cep: '89229-101',
    celphone: '(11) 99999-9999',
    email: 'contato@palavradavida.com.br'
  };

  schedule = [
    { day: 'Domingo', hour: '18h30', type: 'Culto de Celebração' },
    { day: 'Sexta-feira', hour: '20h00', type: 'Culto de Oração' }
  ];

  openMaps() {
    const address = encodeURIComponent(`${this.adress.street}, ${this.adress.neighborhood}, ${this.adress.city}`);
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
  }
}
