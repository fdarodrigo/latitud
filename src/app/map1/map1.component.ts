import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { LayersService } from '../services/layers.service';
import { HelpersService } from '../services/helpers.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss'],
})
export class Map1Component implements OnInit {
  isLoading: boolean = true;

  param = {value: 'world'};

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

  houseLocations: any[] = []

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

   intersectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("drop");
        this.intersectionObserver.unobserve(entry.target);
      }
    }
  });

  buttons: [string, string, number, google.maps.ControlPosition][] = [
    ["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
    ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
    ["Tilt Down", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
  ];

  average: any;
  total_houses: any;
  polygon!: google.maps.Polygon;

  constructor(
    private locations: LocationsService,
    private layer: LayersService,
    private helper: HelpersService,
    private translate: TranslateService) {

      translate.setDefaultLang('pt');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        
  }

  ngOnInit() {

    this.mapOptions = {
      center: { lat: -3.7318621211337466, lng: -38.50404330691704 },
      zoom: 13,
      tilt: 57.5,
      heading: 320,
      mapId: "90f87356969d889c",
    };

    this.map = new google.maps.Map(document.getElementById("map")!, this.mapOptions);

    this.polygon = new google.maps.Polygon(this.polygonOptions);
    this.polygon.setMap(this.map);

    google.maps.event.addDomListener(document, 'keydown', (event: KeyboardEvent) => {
      if (event.keyCode === 46 || event.keyCode === 8) {
        this.polygon.setMap(null);
      }
    });

    google.maps.event.addListener(this.map, 'click', (event: google.maps.KmlMouseEvent) => {
      const path = this.polygon.getPath();
      path.push(event.latLng!);

      this.clickedCoordinates.push(event.latLng!.toJSON());
    });

    this.isLoading = true;
    this.locations.getDadosMock().subscribe(res => {
      this.houseLocations = res['data'];

      //console.log(this.houseLocations)

      if (this.houseLocations.length > 0) {
        this.isLoading = false;
        this.buttons.forEach(([text, mode, amount, position]) => {
          const controlDiv = document.createElement("div");
          const controlUI = document.createElement("button");

          controlUI.classList.add("ui-button");
          controlUI.innerText = `${text}`;
          controlUI.addEventListener("click", () => {
            this.helper.adjustMap(mode, amount,this.map);
          });
          controlDiv.appendChild(controlUI);
          this.map.controls[position].push(controlDiv);
        });
      } else {
        this.isLoading = true;
      }

    });
  }

  translateLang(lang: string){
    if (lang === 'pt') {
      this.translate.use('pt');
    } else if (lang === 'en') {
      this.translate.use('en');
    }
  }

  /* visualizarTodas(): void {

    this.average = this.avaragePrices(this.houseLocations)
    this.total_houses = this.houseLocations.length

    this.houseLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.coords.lat, location.coords.lng),
        map: this.map,
        icon: {
          url: 'assets/img/icons/home.png',
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      marker.addListener('click', () => {
        this.openDialog('1000ms', '500ms', location)
      });
    });
  } */

  buscarCasasNoPoligono(): void {
    if (this.clickedCoordinates.length >= 3) {
      const poly = new google.maps.Polygon({ paths: this.clickedCoordinates });

      const casasNoPoligono = this.houseLocations.filter((casa) => {
        return google.maps.geometry.poly.containsLocation(
          new google.maps.LatLng(casa.coords.lat, casa.coords.lng),
          poly
        );
      });

      this.average = this.helper.avaragePrices(casasNoPoligono)
      this.total_houses = casasNoPoligono.length

      casasNoPoligono.forEach(casa => {
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(casa.coords.lat, casa.coords.lng),
          map: this.map,
          icon: {
            url: 'assets/img/icons/home.png',
            scaledSize: new google.maps.Size(40, 40),
          },
        });

        marker.addListener('click', () => {
          this.helper.openDialog('400ms', '1000ms', casa)
        });
      });
    } else {
      console.log('Por favor, desenhe um polígono com pelo menos 3 pontos.');
    }
  }

  showLocations(type: string) {

    if (this.selectedType === type) {
      this.selectedType = null;
    } else {
      this.selectedType = type;
    }

    if (this.isLocationsVisible) {
      this.removeMarkers();
    }

    // Converter as coordenadas do polígono para o formato adequado
    const polygonBounds = new google.maps.LatLngBounds();
    this.clickedCoordinates.forEach((coord: any) => {
      const { lng, lat } = coord;
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
          const marker = this.helper.createMarkerPlaces(result, this.map);
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

  traffLayer() {
    this.layer.traffLayer(this.map)
  }
  transLayer() {
    this.layer.transLayer(this.map)
  }
  bikeLayer() {
    this.layer.bikeLayer(this.map)
  }

}

