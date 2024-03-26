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
export class DialogInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogInfoComponent>,
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

  getIconClass(amenity: string): string | undefined {
    if (amenity === '...') {
      return undefined;
    }

    const iconMapPt: { [key: string]: string } = {
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
      'Circuito de segurança': 'fas fa-shield-alt',
      'Hall de entrada': 'fas fa-door-open',
      'Sala de reunião': 'fas fa-users',
      'Depósito': 'fas fa-box-open',
      'Câmera de segurança': 'fas fa-camera',
      'Closet': 'fas fa-tshirt',
      'TV a cabo': 'fas fa-tv',
      'Praça': 'fas fa-tree',
      'Frente para o oeste': 'fas fa-compass',
    };

    const iconMapEn: { [key: string]: string } = {
      'Pool': 'fas fa-swimmer',
      'Barbecue grill': 'fas fa-fire',
      'Elevator': 'fas fa-building',
      'Gym': 'fas fa-dumbbell',
      'Laundry area': 'fas fa-wrench',
      'Party room': 'fas fa-glass-cheers',
      'Gated community': 'fas fa-shield-alt',
      'Garden': 'fas fa-tree',
      'Playground': 'fas fa-child',
      'Balcony': 'fas fa-door-open',
      'Gourmet balcony': 'fas fa-utensils',
      'Garage': 'fas fa-car',
      'Intercom': 'fas fa-phone-alt',
      'Ocean view': 'fas fa-water',
      'Kitchen': 'fas fa-utensils',
      'Sports court': 'fas fa-basketball-ball',
      'Built-in cabinet': 'fas fa-box',
      'Cup': 'fas fa-coffee',
      'Internet connection': 'fas fa-wifi',
      'Adult pool': 'fas fa-swimmer',
      'Air conditioning': 'fas fa-snowflake',
      'Laundry': 'fas fa-tshirt',
      'Dining room': 'fas fa-utensils',
      'Gourmet space': 'fas fa-utensils',
      'Tennis court': 'fas fa-table-tennis',
      '24-hour security': 'fas fa-shield-alt',
      'Electronic gate': 'fas fa-door',
      '24-hour concierge': 'fas fa-shield-alt',
      'American kitchen': 'fas fa-utensils',
      'Blindex box': 'fas fa-box-open',
      'Kitchen cabinet': 'fas fa-box',
      'Watchman': 'fas fa-user-shield',
      'Ramp': 'fas fa-ramp-loading',
      'Handicap access': 'fas fa-wheelchair',
      'Parking lot': 'fas fa-parking',
      'Office': 'fas fa-laptop',
      'Alarm system': 'fas fa-bell',
      'Big window': 'fas fa-window-maximize',
      'East-facing': 'fas fa-compass',
      'South-facing': 'fas fa-compass',
      'Sandy': 'fas fa-mountain',
      'Plain': 'fas fa-mountain',
      'Security circuit': 'fas fa-shield-alt',
      'Entrance hall': 'fas fa-door-open',
      'Meeting room': 'fas fa-users',
      'Deposit': 'fas fa-box-open',
      'Security camera': 'fas fa-camera',
      'Closet': 'fas fa-tshirt',
      'Cable TV': 'fas fa-tv',
      'Square': 'fas fa-tree',
      'West-facing': 'fas fa-compass',
    };



    console.log('icon > ',this.data.lang)
    return this.data.lang === "pt" ? iconMapPt[amenity] : iconMapEn[amenity];
  }

}
