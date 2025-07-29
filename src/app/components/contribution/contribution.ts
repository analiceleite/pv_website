import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContributionOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  verse?: string;
  verseRef?: string;
}

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./contribution.scss']
})
export class Contribution {
  qrCodeUrl = '';
  pixKey = '05997686000150';
  churchName = 'PV';
  city = 'JOINVILLE';
  showQRCode = false;
  selectedAmount: number | null = null;
  customAmount: number | null = null;
  showCustomInput = false;
  pixCode: string = '';
  showCopyMessage = false;

  // Versículos inspiradores sobre contribuição
  inspirationalVerses = [
    {
      text: "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria.",
      reference: "2 Coríntios 9:7"
    },
    {
      text: "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa.",
      reference: "Malaquias 3:10"
    },
    {
      text: "Honra ao Senhor com a tua fazenda, e com as primícias de toda a tua renda.",
      reference: "Provérbios 3:9"
    }
  ];

  currentVerseIndex = 0;

  contributionOptions: ContributionOption[] = [
    {
      id: 'dizimo',
      title: 'Dízimo',
      description: 'Entrega fiel de 10% como reconhecimento da provisão de Deus',
      icon: '💝',
      verse: 'Trazei todos os dízimos à casa do tesouro',
      verseRef: 'Malaquias 3:10'
    },
    {
      id: 'oferta',
      title: 'Oferta Voluntária',
      description: 'Contribuição espontânea movida pela gratidão e amor',
      icon: '🙏',
      verse: 'Deus ama ao que dá com alegria',
      verseRef: '2 Coríntios 9:7'
    },
    {
      id: 'missoes',
      title: 'Missões',
      description: 'Apoio para evangelização e plantação de igrejas',
      icon: '🌍',
      verse: 'Ide e fazei discípulos de todas as nações',
      verseRef: 'Mateus 28:19'
    },
    {
      id: 'construcao',
      title: 'Construção do Templo',
      description: 'Contribuição para obras e melhorias da casa de Deus',
      icon: '🏛️',
      verse: 'A casa que se há de edificar ao Senhor há de ser magnífica',
      verseRef: '1 Crônicas 22:5'
    }
  ];

  // Valores sugeridos para oferta rápida
  suggestedAmounts = [10, 25, 50, 100, 200];

  constructor() {
    // Rotaciona versículos a cada 10 segundos
    setInterval(() => {
      this.currentVerseIndex = (this.currentVerseIndex + 1) % this.inspirationalVerses.length;
    }, 10000);
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = null;
    this.showCustomInput = false;
  }

  showCustomAmountInput() {
    this.showCustomInput = true;
    this.selectedAmount = null;
  }

  setCustomAmount() {
    if (this.customAmount && this.customAmount > 0) {
      this.selectedAmount = this.customAmount;
    }
  }

  // FUNÇÃO SIMPLIFICADA - GERA PIX DIRETO
  generatePixQR() {
    const valor = this.selectedAmount || this.customAmount;
    if (!valor) return;

    this.pixCode = this.createPixCode(valor);

    // Gera a imagem do QR Code usando API externa
    const baseUrl = 'https://api.qrserver.com/v1/create-qr-code/';
    this.qrCodeUrl = `${baseUrl}?data=${encodeURIComponent(this.pixCode)}&size=250x250`;

    this.showQRCode = true;
  }

  // GERADOR PIX SIMPLIFICADO
  private createPixCode(valor: number): string {
    // Função auxiliar para formatar campos
    const field = (id: string, value: string) => {
      const size = value.length.toString().padStart(2, '0');
      return `${id}${size}${value}`;
    };

    // Monta o código PIX
    const merchantAccount = field('00', 'BR.GOV.BCB.PIX') + field('01', this.pixKey);
    const valorStr = valor.toFixed(2);

    let payload = '000201' + // Formato
      field('26', merchantAccount) + // Conta merchant  
      '52040000' + // Categoria
      '5303986' + // Moeda (BRL)
      field('54', valorStr) + // Valor
      '5802BR' + // País
      field('59', this.churchName) + // Nome
      field('60', this.city) + // Cidade
      field('62', field('05', '***')); // ID da transação

    // Calcula CRC16
    let crc = 0xFFFF;
    const crcData = payload + '6304';
    for (let i = 0; i < crcData.length; i++) {
      crc ^= crcData.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
      }
    }
    crc &= 0xFFFF;

    return payload + '6304' + crc.toString(16).toUpperCase().padStart(4, '0');
  }

  hidePixQR() {
    this.showQRCode = false;
    this.selectedAmount = null;
    this.customAmount = null;
    this.showCustomInput = false;
    this.pixCode = '';
  }

  copyPixToClipboard() {
    const valor = this.selectedAmount || this.customAmount;
    if (!valor) return;

    this.pixCode = this.createPixCode(valor);

    navigator.clipboard.writeText(this.pixCode).then(() => {
      this.showCopyMessage = true;
      setTimeout(() => this.showCopyMessage = false, 2000);
    }).catch(err => {
      console.error('Erro ao copiar:', err);
    });
  }

  async copyPixKey() {
    try {
      await navigator.clipboard.writeText(this.pixCode);
      this.showCopyMessage = true;
      setTimeout(() => this.showCopyMessage = false, 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  }

  getCurrentVerse() {
    return this.inspirationalVerses[this.currentVerseIndex];
  }

  isValidAmount(): boolean {
    const amount = this.selectedAmount || this.customAmount;
    return amount !== null && amount > 0;
  }

  formatCurrency(value: number | null): string {
    if (!value) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}