import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule],
})
export class Dialog1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}

    ngOnInit() {
    console.log(this.data);
  }

  getIconClass(amenidade: string): string | undefined {
    // Se a amenidade for "...", retorne undefined para não exibir nada
    if (amenidade === '...') {
      return undefined;
    }

    // Mapeie as amenidades para as classes de ícones correspondentes
    const iconMap: { [key: string]: string } = {
      'Piscina': 'fas fa-swimmer',
      'Churrasqueira': 'fas fa-fire',
      'Elevador': 'fas fa-building',
      'Academia': 'fas fa-dumbbell',
      'Aceita animais': 'fas fa-paw',
      'Área de serviço': 'fas fa-wrench',
      'Salão de festas': 'fas fa-glass-cheers',
      'Condomínio fechado': 'fas fa-shield-alt',
      'Jardim': 'fas fa-tree',       // Ícone para "Jardim"
      'Playground': 'fas fa-child'   // Ícone para "Playground"
      // Adicione mais mapeamentos conforme necessário
    };


    // Retorna a classe de ícone correspondente ou undefined se for "..."
    return iconMap[amenidade];
  }

}
