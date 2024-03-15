import { Injectable } from '@angular/core';
import { Dialog1Component } from '../dialogs/dialog1/dialog1.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    public dialog: MatDialog,
  ) { }

  avaragePrices(imoveis: any[]): number {
    let somaValoresAluguel = 0;
    let count = 0;

    for (const imovel of imoveis) {

        const valorAluguelNumerico = imovel.valor_aluguel;

        if (!isNaN(valorAluguelNumerico)) {
          somaValoresAluguel += valorAluguelNumerico;
          count++;
        }

    }

    if (count === 0) {
      console.warn('Nenhum valor de aluguel válido encontrado.');
      return 0; // Ou qualquer valor padrão desejado
    }

    const mediaAluguel = somaValoresAluguel / count;

    const mediaFormatada = parseFloat(mediaAluguel.toFixed(2));

    return mediaFormatada;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, house: any): void {
    this.dialog.open(Dialog1Component, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: house
    });
  }

  getRandomPosition(map:any ) {
    const bounds = map.getBounds();
    const minLat = bounds.getSouthWest().lat();
    const minLng = bounds.getSouthWest().lng();
    const maxLat = bounds.getNorthEast().lat();
    const maxLng = bounds.getNorthEast().lng();
    const latRange = maxLat - minLat;
    // Note: longitude can span from a positive longitude in the west to a
    // negative one in the east. e.g. 150lng (150E) <-> -30lng (30W) is a large
    // span that covers the whole USA.
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
        scaledSize: new google.maps.Size(40, 40), // Tamanho personalizado do ícone
      },
    });

      return marker;
  }
}
