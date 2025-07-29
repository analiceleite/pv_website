import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AgendaItem {
  date: string;
  event: string;
  type: 'odre-novo' | 'culto-mulheres' | 'valorosas' | 'evangelismo' | 'especial';
  description?: string;
}

@Component({
  selector: 'app-anual-schedule',
  imports: [CommonModule],
  templateUrl: './anual-schedule.html',
  styleUrl: './anual-schedule.scss'
})
export class AnualSchedule {
  isLiveNow = false;
  nextCulto = 'Domingo às 18h30';
  streamUrl = 'https://youtube.com/live/sua-transmissao';

  activeTab: 'horarios' | 'agenda' = 'horarios';
  selectedEventType: string = 'todos';

  // Horários fixos semanais
  horariosFixos = [
    {
      dia: 'Domingo',
      horario: '18h30',
      titulo: 'Culto de Celebração',
      descricao: 'Momento de adoração, louvor e palavra'
    },
    {
      dia: 'Quarta',
      horario: '19h30',
      titulo: 'Grupos Familiares',
      descricao: 'Tempo de comunhão com as familias (consultar grupos locais)'
    },
    {
      dia: 'Sexta',
      horario: '19h00',
      titulo: 'Oração e Edificação',
      descricao: 'Crescimento espiritual e comunhão'
    }
  ];

  // Agenda anual completa
  agendaAnual: AgendaItem[] = [
    // ODRE NOVO
    { date: '08/02', event: 'Odre Novo', type: 'odre-novo' },
    { date: '08/03', event: 'Odre Novo', type: 'odre-novo' },
    { date: '22/03', event: 'Odre Novo', type: 'odre-novo' },
    { date: '05/04', event: 'Odre Novo', type: 'odre-novo' },
    { date: '12/04', event: '12 Horas de Adoração', type: 'especial', description: '🔥 Evento especial de adoração' },
    { date: '19/04', event: 'Odre Novo', type: 'odre-novo' },
    { date: '03/05', event: 'Odre Novo', type: 'odre-novo' },
    { date: '17/05', event: 'Odre Novo', type: 'odre-novo' },
    { date: '31/05', event: 'Odre Novo', type: 'odre-novo' },
    { date: '07/06', event: 'Odre Novo', type: 'odre-novo' },
    { date: '21/06', event: 'Odre Novo', type: 'odre-novo' },
    { date: '05/07', event: 'Odre Novo', type: 'odre-novo' },
    { date: '19/07', event: 'Odre Novo', type: 'odre-novo' },
    { date: '02/08', event: 'Odre Novo', type: 'odre-novo' },
    { date: '16/08', event: 'Aniversário 2 Anos ON', type: 'especial', description: '🎂 Celebração de aniversário' },
    { date: '30/08', event: 'Odre Novo', type: 'odre-novo' },
    { date: '13/09', event: 'Odre Novo', type: 'odre-novo' },
    { date: '25/10', event: 'Odre Novo', type: 'odre-novo' },
    { date: '08/11', event: 'Odre Novo', type: 'odre-novo' },
    { date: '22/11', event: 'Odre Novo', type: 'odre-novo' },
    { date: '06/12', event: 'Odre Novo', type: 'odre-novo' },
    { date: '20/12', event: 'Odre Novo', type: 'odre-novo' },

    // CULTO DE MULHERES
    { date: '29/03', event: 'Culto de Mulheres', type: 'culto-mulheres' },
    { date: '20/09', event: 'Culto de Mulheres', type: 'culto-mulheres' },

    // VALOROSAS
    { date: '07/04', event: 'Início das Valorosas', type: 'valorosas' },
    { date: '17/05', event: 'Valorosas', type: 'valorosas' },
    { date: '14/06', event: 'Valorosas', type: 'valorosas' },
    { date: '19/07', event: 'Retiro Valorosas', type: 'valorosas', description: 'Retiro especial' },
    { date: '09/08', event: 'Formatura Valorosas', type: 'valorosas', description: 'Cerimônia de formatura' },

    // EVANGELISMO
    { date: '15/02', event: 'Evangelismo', type: 'evangelismo' },
    { date: '08/03', event: 'Evangelismo', type: 'evangelismo' },
    { date: '21/03', event: 'Culto Evangelístico', type: 'evangelismo', description: 'Culto especial evangelístico' },
    { date: '12/04', event: 'Evangelismo', type: 'evangelismo' },
    { date: '26/04', event: 'Evangelismo', type: 'evangelismo' },
    { date: '17/05', event: 'Evangelismo', type: 'evangelismo' },
    { date: '31/05', event: 'Evangelismo', type: 'evangelismo' },
    { date: '14/06', event: 'Evangelismo', type: 'evangelismo' },
    { date: '27/06', event: 'Culto Evangelístico', type: 'evangelismo', description: 'Culto especial evangelístico' },
    { date: '12/07', event: 'Evangelismo', type: 'evangelismo' },
    { date: '26/07', event: 'Evangelismo', type: 'evangelismo' },
    { date: '16/08', event: 'Evangelismo', type: 'evangelismo' },
    { date: '30/08', event: 'Evangelismo', type: 'evangelismo' },
    { date: '13/09', event: 'Evangelismo', type: 'evangelismo' },
    { date: '26/09', event: 'Culto Evangelístico - Igreja Reunida', type: 'evangelismo', description: 'Toda a igreja reunida' },
    { date: '18/10', event: 'Evangelismo', type: 'evangelismo' },
    { date: '08/11', event: 'Evangelismo', type: 'evangelismo' },
    { date: '22/11', event: 'Evangelismo', type: 'evangelismo' }
  ];

  constructor() {
    this.checkIfLive();
    this.sortAgendaByDate();
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

  sortAgendaByDate() {
    this.agendaAnual.sort((a, b) => {
      const [dayA, monthA] = a.date.split('/').map(Number);
      const [dayB, monthB] = b.date.split('/').map(Number);

      if (monthA !== monthB) {
        return monthA - monthB;
      }
      return dayA - dayB;
    });
  }

  watchLive() {
    window.open(this.streamUrl, '_blank');
  }

  setActiveTab(tab: 'horarios' | 'agenda') {
    this.activeTab = tab;
  }

  setEventFilter(type: string) {
    this.selectedEventType = type;
  }

  getFilteredAgenda(): AgendaItem[] {
    if (this.selectedEventType === 'todos') {
      return this.agendaAnual;
    }
    return this.agendaAnual.filter(item => item.type === this.selectedEventType);
  }

  getEventTypeClass(type: string): string {
    return `event-${type}`;
  }

  getMonthName(monthNumber: number): string {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[monthNumber - 1];
  }

  getAgendaByMonth() {
    const agendaByMonth: { [key: number]: AgendaItem[] } = {};
    const filteredAgenda = this.getFilteredAgenda();

    filteredAgenda.forEach(item => {
      const month = parseInt(item.date.split('/')[1]);
      if (!agendaByMonth[month]) {
        agendaByMonth[month] = [];
      }
      agendaByMonth[month].push(item);
    });

    return agendaByMonth;
  }
}