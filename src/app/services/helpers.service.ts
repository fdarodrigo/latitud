import { Injectable } from '@angular/core';
import { DialogInfoComponent } from '../dialogs/dialog-info/dialog1.component';
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
}
