import { Component } from '@angular/core';
/* import { Deck } from '@deck.gl/core';
import { TripsLayer } from '@deck.gl/layers'; */

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.scss'],
})
export class Map2Component {

  GoogleMapsOverlay: any//deck.GoogleMapsOverlay;
  TripsLayer: any //deck.TripsLayer;
  DATA_URL =
    "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json";
  LOOP_LENGTH = 1800;
  VENDOR_COLORS = [
    [255, 0, 0],
    [0, 0, 255], // vendor #1
  ];

  initMap() {
    const map = new google.maps.Map(document.getElementById("map")!, {
      center: { lat: 40.72, lng: -74 },
      mapId: "fae05836df2dc8bb",
      tilt: 90,
      zoom: 15,
    });
    let currentTime = 0;
    const props = {
      id: "trips",
      data: this.DATA_URL,
      getPath: (d: any) => d.path,
      getTimestamps: (d: any) => d.timestamps,
      getColor: (d: any) => this.VENDOR_COLORS[d.vendor],
      opacity: 1,
      widthMinPixels: 2,
      trailLength: 180,
      currentTime,
      shadowEnabled: false,
    };
    const overlay = new this.GoogleMapsOverlay({});

    const animate = () => {
      currentTime = (currentTime + 1) % this.LOOP_LENGTH;

      const tripsLayer = new this.TripsLayer({
        ...props,
        currentTime,
      });

      overlay.setProps({
        layers: [tripsLayer],
      });
      window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
    overlay.setMap(map);
  }
}

