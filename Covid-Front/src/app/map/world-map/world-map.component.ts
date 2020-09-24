import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map } from 'leaflet';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

   map: Map;
  options: MapOptions;
  lastLayer: any;
  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }


private initializeMapOptions ():void {
    this.options = {
      zoom: 2,
    center: latLng(29.5352, 16.1719),
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 4, minZoom:2, attribution: 'OSM'})
      ]
    }
  }

  initializeMap (map: Map) {
    this.map = map;
    console.log('mouse initalize event');
  }
  
  // private getCountry ():string {
  //   return '';
  // }

  public mouseOverEvent(event: Event){
    console.log('mouse over event');
  }

  public mouseOutEvent(event: Event){
    console.log('mouse out event');

  }





}
