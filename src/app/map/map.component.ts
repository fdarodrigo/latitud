import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { LayersService } from '../services/layers.service';
import { HelpersService } from '../services/helpers.service';
import { TranslateService } from '@ngx-translate/core';
import { } from '@angular/google-maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewChecked {
  isLoading: boolean = true;

  param = { value: 'world' };

  map!: google.maps.Map;
  polygonOptions: google.maps.PolygonOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  };

  houseLocations: any[] = []

  icons: any

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

  average: any;
  total_houses: any;
  polygon!: google.maps.Polygon;
  lang!: string;
  drawingManager!: google.maps.drawing.DrawingManager;

  isDrawing = false;
  _polygon: google.maps.Polygon | null = null;
  freehandPolygon: google.maps.Polyline | null = null;
  firstClickOccurred: any;
  poly!: google.maps.Polyline;

  constructor(
    private locations: LocationsService,
    private layer: LayersService,
    private helper: HelpersService,
    private translate: TranslateService) {
    // translate.setDefaultLang('pt');
    this.translate.use('pt');
    this.helper.openDialogLang('200ms', '400ms').subscribe(result => {
      if (result) {
        this.translate.use('en');
        this.lang = 'en'
        this.icons = this.helper.iconsEn
      } else {
        this.translate.use('pt');
        this.lang = 'pt'
        this.icons = this.helper.iconsPt
      }
    })

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

    // this.polygon = new google.maps.Polygon(this.polygonOptions);
    // this.polygon.setMap(this.map);

    // google.maps.event.addDomListener(document, 'keydown', (event: KeyboardEvent) => {
    //   if (event.keyCode === 46 || event.keyCode === 8) {
    //     this.polygon.setMap(null);
    //   }
    // });

    // google.maps.event.addListener(this.map, 'click', (event: google.maps.KmlMouseEvent) => {
    //   const path = this.polygon.getPath();
    //   path.push(event.latLng!);

    //   this.clickedCoordinates.push(event.latLng!.toJSON());
    // });





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
            this.helper.adjustMap(mode, amount, this.map);
          });
          controlDiv.appendChild(controlUI);
          this.map.controls[position].push(controlDiv);
        });
      } else {
        this.isLoading = true;
      }

    });
  }

  toggleDrawing() {

      this.disable();
      google.maps.event.addDomListener(this.map.getDiv(),'mousedown',() =>{
        this.drawFreeHand()
    });
    
  }

  drawFreeHand() {

    this.poly = new google.maps.Polyline({ 
      map: this.map, 
      clickable: false,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
    });

    var move = google.maps.event.addListener(this.map, 'mousemove',  (e: { latLng: google.maps.LatLng; }) => {
      this.poly.getPath().push(e.latLng);

      this.clickedCoordinates.push(e.latLng!.toJSON());
    });

    google.maps.event.addListenerOnce(this.map, 'mouseup',  (e: any) => {
      google.maps.event.removeListener(move);
      var path = this.poly.getPath();
      this.poly.setMap(null);
      this.poly = new google.maps.Polygon({ 
        map: this.map, 
        paths: path,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
       });


      google.maps.event.clearListeners(this.map.getDiv(), 'mousedown');

      this.enable()

      this.searchHousesPolyg()
    });
  }

  disable() {
    this.map.setOptions({
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: false
    });
  }

  enable() {
    this.map.setOptions({
      draggable: true,
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: true
    });
  }

  ngAfterViewChecked(): void {
    if (this.lang === 'pt') {
      this.translate.use('pt');
      this.lang = 'pt'
    } else if (this.lang === 'en') {
      this.translate.use('en');
      this.lang = 'en'
    }
  }

  searchHousesPolyg(): void {
    if (this.clickedCoordinates.length >= 3) {
      const poly = new google.maps.Polygon({ paths: this.clickedCoordinates });

      const housesInOlygon = this.houseLocations.filter((house) => {
        return google.maps.geometry.poly.containsLocation(
          new google.maps.LatLng(house.coordinates.lat, house.coordinates.lng),
          poly
        );
      });

      this.average = this.helper.avaragePrices(housesInOlygon)
      this.total_houses = housesInOlygon.length

      housesInOlygon.forEach(house => {
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(house.coordinates.lat, house.coordinates.lng),
          map: this.map,
          icon: {
            url: 'assets/img/icons/home.png',
            scaledSize: new google.maps.Size(40, 40),
          },
        });

        house.lang = this.lang;

        marker.addListener('click', () => {
          this.helper.openDialogInfo('400ms', '1000ms', house)
        });
      });
    } else {
      console.log(this.lang === 'pt' ? 'Por favor, desenhe um polígono com pelo menos 3 pontos.' : "Please, draw a polygon with at least 3 points.");
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
