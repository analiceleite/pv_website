import { Component } from '@angular/core';
import { FamiliarGroup } from '../../services/interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-familiar-groups',
  imports: [CommonModule, FormsModule],
  templateUrl: './familiar-groups.html',
  styleUrl: './familiar-groups.scss'
})

export class FamiliarGroups {
  searchTerm: string = '';

  groups: FamiliarGroup[] = [
    {
      name: 'GF Déboras',
      address: 'Bairro Itaum',
      hour: 'Quartas-feiras',
      focus: 'Mulheres',
      lider: 'Beatriz e Juliana',
      phone: '5547988755393'
    },
    {
      name: 'GF Renascer',
      address: 'Bairro Itinga',
      hour: 'Terças-feiras',
      focus: 'Homens',
      lider: 'Pr Cristiano e DC Roberto',
      phone: '5547984959569'
    },
    {
      name: 'GF Mulheres Invictas',
      address: 'Bairro Bucarein',
      hour: 'Quintas-feiras',
      focus: 'Mulheres',
      lider: 'Andressa e Luciana',
      phone: '5547988856678'
    },
    {
      name: 'GF Lançando as Redes',
      address: 'Bairro Fátima',
      hour: 'Quartas-feiras às 19h00',
      focus: 'Misto',
      lider: 'Manuel e Sandro',
      phone: '5547989127887'
    },
    {
      name: 'GF Restaurados',
      address: 'Bairro Fátima',
      hour: 'Quartas-feiras',
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
      hour: 'Sextas-feiras',
      focus: 'Meninas',
      lider: 'Gabriela, Brendha e Rebeca',
      phone: '5547992673547'
    },
    {
      name: 'GF Resgatados',
      address: 'Bairro Fátima',
      hour: 'Sábados',
      focus: 'Misto',
      lider: 'Alex e Gisele',
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
      hour: 'Quartas-feiras',
      focus: 'Homens',
      lider: 'Tel e Leandro',
      phone: '5547997300742'
    },
    {
      name: 'GF Floresça',
      address: 'Bairro Ulisses Guimarães',
      hour: 'Terças-feiras',
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
      hour: 'Quintas-feiras',
      focus: 'Mulheres',
      lider: 'Miss Luciana e Arlete',
      phone: '5547999954554'
    }
  ]

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

    const term = this.searchTerm.toLowerCase();
    return this.groups.filter(grupo =>
      grupo.name.toLowerCase().includes(term) ||
      grupo.address.toLowerCase().includes(term) ||
      grupo.hour.toLowerCase().includes(term) ||
      grupo.focus.toLowerCase().includes(term) ||
      grupo.lider.toLowerCase().includes(term)
    );
  }
}
