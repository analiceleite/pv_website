import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  imports: [CommonModule],
  templateUrl: './address.html',
  styleUrl: './address.scss'
})
export class Address {
  address = {
    street: 'Rua Fátima, 2597',
    neighborhood: 'Fátima',
    city: 'Joinville',
    cep: '89229-101',
    celphone: '(47) 99925-3311 - Pr Sandro Dias',
    email: 'prsandropalavradavida@gmail.com'
  };

  schedule = [
    { day: 'Domingo', hour: '18h30', type: 'Culto de Celebração' },
    { day: 'Sexta-feira', hour: '20h00', type: 'Culto de Oração' }
  ];

  openMaps() {
    const address = encodeURIComponent(`${this.address.street}, ${this.address.neighborhood}, ${this.address.city}`);
    window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
  }
}
