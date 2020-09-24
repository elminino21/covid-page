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


//  public options = {
//     layers: [
//         tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 4, minZoom: 2, attribution: '...' })
//     ],
//     zoom: 2,
//     center: latLng(29.5352, 16.1719)
// };




}
