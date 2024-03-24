import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, TranslateModule],
})
export class Dialog1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translate: TranslateService)
    {
      // translate.setDefaultLang('pt');

      // this.translate.use('en')
    }

    ngOnInit() {
    console.log(this.data);

    if(this.data.lang = "pt"){
      this.translate.use('pt')
    } 
    else if (this.data.lang = "en"){
      this.translate.use('en')
    }
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
      'Área de serviço': 'fas fa-wrench',
      'Salão de festas': 'fas fa-glass-cheers',
      'Condomínio fechado': 'fas fa-shield-alt',
      'Jardim': 'fas fa-tree',
      'Playground': 'fas fa-child',
      'Varanda': 'fas fa-door-open',
      'Varanda gourmet': 'fas fa-utensils',
      'Garagem': 'fas fa-car',
      'Interfone': 'fas fa-phone-alt',
      'Vista para o mar': 'fas fa-water',
      'Cozinha': 'fas fa-utensils',
      'Quadra poliesportiva': 'fas fa-basketball-ball',
      'Armário embutido': 'fas fa-box',
      'Copa': 'fas fa-coffee',
      'Conexão à internet': 'fas fa-wifi',
      'Piscina para adulto': 'fas fa-swimmer',
      'Ar-condicionado': 'fas fa-snowflake',
      'Lavanderia': 'fas fa-tshirt',
      'Sala de jantar': 'fas fa-utensils',
      'Espaço gourmet': 'fas fa-utensils',
      'Quadra de tênis': 'fas fa-table-tennis',
      'Segurança 24h': 'fas fa-shield-alt',
      'Portão eletrônico': 'fas fa-door',
      'Portaria 24h': 'fas fa-shield-alt',
      'Cozinha americana': 'fas fa-utensils',
      'Box blindex': 'fas fa-box-open',
      'Armário na cozinha': 'fas fa-box',
      'Vigia': 'fas fa-user-shield',
      'Rampa': 'fas fa-ramp-loading',
      'Acesso para deficientes': 'fas fa-wheelchair',
      'Estacionamento': 'fas fa-parking',
      'Escritório': 'fas fa-laptop',
      'Sistema de alarme': 'fas fa-bell',
      'Janela grande': 'fas fa-window-maximize',
      'Frente para o leste': 'fas fa-compass',
      'Frente para o sul': 'fas fa-compass',
      'Arenoso': 'fas fa-mountain',
      'Plano': 'fas fa-mountain',
      'Rua asfaltada': 'fas fa-road',
      'Desnível para frente (rua)': 'fas fa-road',
      'Circuito de segurança': 'fas fa-shield-alt',
      'Hall de entrada': 'fas fa-door-open',
      'Sala de reunião': 'fas fa-users',
      'Depósito': 'fas fa-box-open',
      'Câmera de segurança': 'fas fa-camera',
      'Closet': 'fas fa-tshirt',
      'Vestiário': 'fas fa-tshirt',
      'TV a cabo': 'fas fa-tv',
      'Praça': 'fas fa-tree',
      'Serviços públicos essenciais': 'fas fa-hands-helping',
      'Frente para o oeste': 'fas fa-compass',
      'Rede de água e esgoto': 'fas fa-tint',
    };



    // Retorna a classe de ícone correspondente ou undefined se for "..."
    return iconMap[amenidade];
  }

}
