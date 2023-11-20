import { Component, OnInit } from '@angular/core';
import { Dialog1Component } from '../dialogs/dialog1/dialog1.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss'],
})
export class Map1Component implements OnInit {
  map!: google.maps.Map;
  polygonOptions: google.maps.PolygonOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    editable: true,
    draggable: true
  };
  marker: any;
  houseLocations: google.maps.LatLngLiteral[] = [
    { lat: -3.7319, lng: -38.5291 },
    { lat: -3.7223, lng: -38.5137 },
    { lat: -3.7577, lng: -38.5568 },
    { lat: -3.7310, lng: -38.5264 },
    { lat: -3.7641, lng: -38.4955 },
    { lat: -3.7204, lng: -38.5066 },
    { lat: -3.7215, lng: -38.4958 },
    { lat: -3.7202, lng: -38.5200 },
    { lat: -3.7404, lng: -38.5285 },
    { lat: -3.7201, lng: -38.5092 },
    { lat: -3.7307, lng: -38.5329 },
    { lat: -3.7402, lng: -38.5167 },
    { lat: -3.7504, lng: -38.5409 },
    { lat: -3.7302, lng: -38.5347 },
    { lat: -3.7588, lng: -38.4875 },
    { lat: -3.7331, lng: -38.5208 },
    { lat: -3.7541, lng: -38.5276 },
    { lat: -3.7608, lng: -38.5280 },
    { lat: -3.7606, lng: -38.5193 },
    { lat: -3.7687, lng: -38.5227 },
    { lat: -3.7308, lng: -38.5107 },
    { lat: -3.7434, lng: -38.5160 },
    { lat: -3.7412, lng: -38.5174 },
    { lat: -3.7548, lng: -38.4936 },
    { lat: -3.7461, lng: -38.5202 },
    { lat: -3.7345, lng: -38.5273 },
    { lat: -3.7349, lng: -38.5190 },
    { lat: -3.7614, lng: -38.5002 },
    { lat: -3.7232, lng: -38.5223 },
    { lat: -3.7421, lng: -38.5237 },
    { lat: -3.7253, lng: -38.5107 },
  ];

  selectedIcon: string | null = null;

  icons = [
    { value: 'gym', class: 'fas fa-dumbbell', description: 'Academia' },
    { value: 'restaurant', class: 'fas fa-utensils', description: 'Restaurante' },
    { value: 'school', class: 'fas fa-graduation-cap', description: 'Escola' },
    { value: 'university', class: 'fas fa-university', description: 'Universidade' },
    { value: 'hospital', class: 'fas fa-hospital', description: 'Hospital' }
  ];

  selectedLayer: string = '';

  clickedCoordinates: google.maps.LatLngLiteral[] = [];
  isLocationsVisible: any;
  markersLoc: any[] = [];
  selectedType: any;
  mapOptions: any;
  placesService!: google.maps.places.PlacesService;

  buttons: [string, string, number, google.maps.ControlPosition][] = [
    ["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
    ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
    ["Tilt Down", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
  ];

  trafficLayer = new google.maps.TrafficLayer()
  transitLayer = new google.maps.TransitLayer()
  bicyclingLayer = new google.maps.BicyclingLayer()

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.mapOptions = {
      center: { lat: -3.7318621211337466, lng: -38.50404330691704 },
      zoom: 13,
     /*  heading: 320,
      tilt: 47.5, */
      mapId: "90f87356969d889c",
    };


    this.map = new google.maps.Map(document.getElementById("map")!, this.mapOptions);

    this.buttons.forEach(([text, mode, amount, position]) => {
      const controlDiv = document.createElement("div");
      const controlUI = document.createElement("button");

      controlUI.classList.add("ui-button");
      controlUI.innerText = `${text}`;
      controlUI.addEventListener("click", () => {
        this.adjustMap(mode, amount);
      });
      controlDiv.appendChild(controlUI);
      this.map.controls[position].push(controlDiv);
    });

    this.visualizarTodas()
  }

  adjustMap(mode: string, amount: number) {
    switch (mode) {
      case "tilt":
        this.map.setTilt(this.map.getTilt()! + amount);
        break;
      case "rotate":
        this.map.setHeading(this.map.getHeading()! + amount);
        break;
      default:
        break;
    }
  };

  visualizarTodas(): void {

    this.houseLocations.forEach((location, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map,
        icon: {
          url: 'assets/img/icons/home.png',
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      // Evento de clique para mostrar a Dialog
      marker.addListener('click', () => {
        this.openDialog('1000ms', '500ms')
      });
    });
  }

  delimitarRegiao(): void {


    this.mapOptions = {
      center: { lat: -3.7318621211337466, lng: -38.50404330691704 },
      zoom: 13
    };

    this.map = new google.maps.Map(document.getElementById("map")!, this.mapOptions);

    const polygon = new google.maps.Polygon(this.polygonOptions);
    polygon.setMap(this.map);

    // Adicionar evento de desenho do polígono
    google.maps.event.addListener(this.map, 'click', (event: google.maps.KmlMouseEvent) => {
      const path = polygon.getPath();
      path.push(event.latLng!);

      this.clickedCoordinates.push(event.latLng!.toJSON());
    });


  }

  buscarCasasNoPoligono(): void {
    if (this.clickedCoordinates.length >= 3) {
      const poly = new google.maps.Polygon({ paths: this.clickedCoordinates });

      const casasNoPoligono = this.houseLocations.filter((casa) => {
        return google.maps.geometry.poly.containsLocation(
          new google.maps.LatLng(casa.lat, casa.lng),
          poly
        );
      });

      casasNoPoligono.forEach(casa => {
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(casa.lat, casa.lng),
          map: this.map,
          icon: {
            url: 'assets/img/icons/home.png',
            scaledSize: new google.maps.Size(40, 40),
          },
        });

        marker.addListener('click', () => {
          this.openDialog('400ms', '1000ms')
        });
      });
    } else {
      console.log('Por favor, desenhe um polígono com pelo menos 3 pontos.');
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Dialog1Component, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      //position: {top: '15%', left: '40%'}
    });
  }

  showLocations(type: string) {

    console.log(this.clickedCoordinates)
    if (this.selectedType === type) {
      this.selectedType = null;
    } else {
      this.selectedType = type;
    }

    // Verificar o estado atual de exibição dos ícones
    if (this.isLocationsVisible) {
      // Remover os marcadores existentes
      this.removeMarkers();
    }

    // Converter as coordenadas do polígono para o formato adequado
    const polygonBounds = new google.maps.LatLngBounds();
    this.clickedCoordinates.forEach((coord: any) => {
      const {lng, lat} = coord;
      polygonBounds.extend(new google.maps.LatLng(lat, lng));
    });

    const request = {
      location: { lat: -3.7253, lng: -38.5107 },
      radius: 5000,
      bounds: polygonBounds,
      type: type,
    };

    this.placesService = new google.maps.places.PlacesService(this.map);

    this.placesService.nearbySearch(request, (results: google.maps.places.PlaceResult[] | null, status: google.maps.places.PlacesServiceStatus) => {
      if (results) {

        console.log(results)
        results.forEach((result) => {
          if (result.business_status === 'CLOSED_TEMPORARILY') {
            return;
          }
          const marker = this.createMarker(result);
          this.markersLoc.push(marker);
        });
        // Atualizar o estado de exibição dos ícones
        this.isLocationsVisible = true;
      }
    });
  }

  removeMarkers() {
    for (let marker of this.markersLoc) {
      marker.setMap(null);
    }
    this.markersLoc = [];
  }

  handleIconSelect(event: any) {
    const selectedValue = event.value;
    // Faça algo com o valor selecionado, por exemplo, chamar uma função
    this.toggleLocations(selectedValue);
  }

  toggleLocations(type: string) {
    if (this.isLocationsVisible) {
      this.removeMarkers();
      this.isLocationsVisible = false;
      this.showLocations(type)
    } else {
      this.showLocations(type);
    }
  }

  createMarker(place: any) {
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
      map: this.map,
      title: place.name,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(40, 40), // Tamanho personalizado do ícone
      },
    });

    return marker;
  }

  traffLayer(){
    this.trafficLayer.setMap(this.map)
    this.transitLayer.setMap(null)
    this.bicyclingLayer.setMap(null)
  }
  transLayer(){
    this.trafficLayer.setMap(null)
    this.transitLayer.setMap(this.map)
    this.bicyclingLayer.setMap(null)
  }
  bikeLayer(){
    this.trafficLayer.setMap(null)
    this.transitLayer.setMap(null)
    this.bicyclingLayer.setMap(this.map)
  }

  
}

