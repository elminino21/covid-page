import { Component, OnInit  } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


 public options = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 5, attribution: '...' })
    ],
    zoom: 2.5,
    center: latLng(29.5352, 16.1719)
};




}
