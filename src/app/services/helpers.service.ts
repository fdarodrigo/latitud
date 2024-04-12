import { Injectable } from '@angular/core';
import { DialogInfoComponent } from '../dialogs/dialog-info/dialog-info.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogLanguageComponent } from '../dialogs/dialog-language/dialog-language.component';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  iconsPt = [
    { value: 'gym', class: 'fas fa-dumbbell', description: 'Academia' },
    { value: 'restaurant', class: 'fas fa-utensils', description: 'Restaurante' },
    { value: 'school', class: 'fas fa-graduation-cap', description: 'Escola' },
    { value: 'university', class: 'fas fa-university', description: 'Universidade' },
    { value: 'hospital', class: 'fas fa-hospital', description: 'Hospital' }
  ];

  iconsEn = [
    { value: 'gym', class: 'fas fa-dumbbell', description: 'Gym' },
    { value: 'restaurant', class: 'fas fa-utensils', description: 'Restaurant' },
    { value: 'school', class: 'fas fa-graduation-cap', description: 'School' },
    { value: 'university', class: 'fas fa-university', description: 'University' },
    { value: 'hospital', class: 'fas fa-hospital', description: 'Hospital' }
  ];

  iconMapPt: { [key: string]: string } = {
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

  iconMapEn: { [key: string]: string } = {
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

  translationMap: { [key: string]: string } = {
    'Pool': 'Piscina',
    'Barbecue grill': 'Churrasqueira',
    'Elevator': 'Elevador',
    'Gym': 'Academia',
    'Laundry area': 'Área de serviço',
    'Party room': 'Salão de festas',
    'Gated community': 'Condomínio fechado',
    'Garden': 'Jardim',
    'Playground': 'Playground',
    'Balcony': 'Varanda',
    'Gourmet balcony': 'Varanda gourmet',
    'Garage': 'Garagem',
    'Intercom': 'Interfone',
    'Ocean view': 'Vista para o mar',
    'Kitchen': 'Cozinha',
    'Sports court': 'Quadra poliesportiva',
    'Built-in cabinet': 'Armário embutido',
    'Cup': 'Copa',
    'Internet connection': 'Conexão à internet',
    'Adult pool': 'Piscina para adulto',
    'Air conditioning': 'Ar-condicionado',
    'Laundry': 'Lavanderia',
    'Dining room': 'Sala de jantar',
    'Gourmet space': 'Espaço gourmet',
    'Tennis court': 'Quadra de tênis',
    '24-hour security': 'Segurança 24h',
    'Electronic gate': 'Portão eletrônico',
    '24-hour concierge': 'Portaria 24h',
    'American kitchen': 'Cozinha americana',
    'Blindex box': 'Box blindex',
    'Kitchen cabinet': 'Armário na cozinha',
    'Watchman': 'Vigia',
    'Ramp': 'Rampa',
    'Handicap access': 'Acesso para deficientes',
    'Parking lot': 'Estacionamento',
    'Office': 'Escritório',
    'Alarm system': 'Sistema de alarme',
    'Big window': 'Janela grande',
    'East-facing': 'Frente para o leste',
    'South-facing': 'Frente para o sul',
    'Sandy': 'Arenoso',
    'Plain': 'Plano',
    'Security circuit': 'Circuito de segurança',
    'Entrance hall': 'Hall de entrada',
    'Meeting room': 'Sala de reunião',
    'Deposit': 'Depósito',
    'Security camera': 'Câmera de segurança',
    'Closet': 'Closet',
    'Cable TV': 'TV a cabo',
    'Square': 'Praça',
    'West-facing': 'Frente para o oeste',
};

  constructor(
    public dialog: MatDialog,
  ) { }

  avaragePrices(imoveis: any[]): number {
    let sumRentValues = 0;
    let count = 0;

    for (const imovel of imoveis) {

        const valorAluguelNumerico = imovel.rentValue;

        if (!isNaN(valorAluguelNumerico)) {
          sumRentValues += valorAluguelNumerico;
          count++;
        }

    }

    if (count === 0) {
      console.warn('Nenhum valor de aluguel válido encontrado.');
      return 0; 
    }

    const mediaAluguel = sumRentValues / count;

    const mediaFormatada = parseFloat(mediaAluguel.toFixed(2));

    return mediaFormatada;
  }

  openDialogLang(enterAnimationDuration: string, exitAnimationDuration: string, ) {
    const dialogRef = this.dialog.open(DialogLanguageComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    return dialogRef.afterClosed();
    
  }

  openDialogInfo(enterAnimationDuration: string, exitAnimationDuration: string, house: AnimationPlaybackEvent): void {
    this.dialog.open(DialogInfoComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: house,
    })
  }
  

  getRandomPosition(map:any ) {
    const bounds = map.getBounds();
    const minLat = bounds.getSouthWest().lat();
    const minLng = bounds.getSouthWest().lng();
    const maxLat = bounds.getNorthEast().lat();
    const maxLng = bounds.getNorthEast().lng();
    const latRange = maxLat - minLat;

    let lngRange = maxLng - minLng;

    if (maxLng < minLng) {
      lngRange += 360;
    }
    return {
      lat: minLat + Math.random() * latRange,
      lng: minLng + Math.random() * lngRange,
    };
  }

  adjustMap(mode: string, amount: number,map: any) {
    switch (mode) {
      case "tilt":
        map.setTilt(map.getTilt()! + amount);
        break;
      case "rotate":
        map.setHeading(map.getHeading()! + amount);
        break;
      default:
        break;
    }
  };

  createMarkerPlaces(place: any, map: any ) {
    let iconUrl: string;

    switch (place.types[0]) {
      case 'gym':
        iconUrl = '../assets/img/icons/workout.gif';
        break;
      case 'school':
        iconUrl = '../assets/img/icons/school.gif';
        break;
      case 'university':
        iconUrl = '../assets/img/icons/university.gif';
        break;
      case 'restaurant':
        iconUrl = '../assets/img/icons/restaurant.gif';
        break;
      case 'hospital':
        iconUrl = '../assets/img/icons/medical-symbol.gif';
        break;
      default:
        iconUrl = '';
        break;
    }

    const marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(40, 40),
      },
    });

      return marker;
  }

  translateDescription(desciption: string): string {
    return desciption
      .replace('Apartamento com', 'Apartment with')
      .replace('Casa com', 'House with')
      .replace('Quartos', 'Rooms')
      .replace('Quarto', 'Room')
      .replace('em', 'in')
      .replace('Galpão', 'Warehouse')
      .replace('Sala Comercial', 'Commercial Room')
      .replace('Prédio Comercial', 'Commercial Building')
      .replace('Ponto Comercial', 'Commercial Point')
      .replace('Imóvel Comercial', 'Commercial Property')
      .replace('Galpão', 'Warehouse')
      .replace('para alugar', 'for rent')
      .replace('Lote/Terreno', 'Plot/Land');
  }
}
