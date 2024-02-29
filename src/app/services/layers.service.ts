import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayersService {

  trafficLayer = new google.maps.TrafficLayer()
  transitLayer = new google.maps.TransitLayer()
  bicyclingLayer = new google.maps.BicyclingLayer()

  constructor() { }

  traffLayer(map: any) {
    this.trafficLayer.setMap(map)
    this.transitLayer.setMap(null)
    this.bicyclingLayer.setMap(null)
  }
  transLayer(map: any) {
    this.trafficLayer.setMap(null)
    this.transitLayer.setMap(map)
    this.bicyclingLayer.setMap(null)
  }
  bikeLayer(map: any) {
    this.trafficLayer.setMap(null)
    this.transitLayer.setMap(null)
    this.bicyclingLayer.setMap(map)
  }
}
