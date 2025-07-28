import { Component } from '@angular/core';
import { FamiliarGroup } from '../../services/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-familiar-groups',
  imports: [CommonModule],
  templateUrl: './familiar-groups.html',
  styleUrl: './familiar-groups.scss'
})

export class FamiliarGroups {
  groups : FamiliarGroup[] = [
    {
      name: 'Grupo Esperança',
      adress: 'Rua das Flores, 123 - Centro',
      hour: 'Terças-feiras às 19h30',
      focus: 'Misto',
      lider: 'João e Maria Silva'
    },
    {
      name: 'Mulheres de Fé',
      adress: 'Rua São José, 456 - Jardim',
      hour: 'Quintas-feiras às 14h00',
      focus: 'Mulheres',
      lider: 'Ana Santos'
    },
    {
      name: 'Homens de Valor',
      adress: 'Av. Principal, 789 - Vila Nova',
      hour: 'Sábados às 16h00',
      focus: 'Homens',
      lider: 'Pedro Oliveira'
    },
    {
      name: 'Geração Futuro',
      adress: 'Rua da Juventude, 321 - Parque',
      hour: 'Sextas-feiras às 19h00',
      focus: 'Adolescentes',
      lider: 'Carlos e Júlia Mendes'
    },
    {
      name: 'Família Unida',
      adress: 'Rua da Paz, 654 - Bairro Alto',
      hour: 'Quartas-feiras às 20h00',
      focus: 'Misto',
      lider: 'Roberto e Cláudia Lima'
    }
  ]

  getFocusClass(focus: string) {
    switch(focus) {
      case "Mulheres": return "foco-mulheres"
      case "Homens": return "foco-homens"
      case "Adolescentes": return "foco-adolescentes"
      default: return "foco-misto"
    }
  }
}
