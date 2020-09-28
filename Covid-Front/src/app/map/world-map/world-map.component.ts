import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { json } from 'd3';
import { latLng, MapOptions, tileLayer, Map, geoJSON } from 'leaflet';
import { Observable } from 'rxjs';
import {  ApiService} from 'src/app/core/services';
 import * as test from '../../../assets/geoJson/custom.geo.json';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

   map: Map;
  options: MapOptions;
  lastLayer: any;
  data: any;
  constructor(private title:Title, private metaService: Meta, private ApiService: ApiService ) { }

  ngOnInit(): void {
    this.initializeMapOptions();
    this.title.setTitle('Covid world state');
    this.metaService.addTags([
      {name: 'keywords', content: 'covid-19, covid 19, covid news, covid map, covid cases'},
      {name: 'description', content: 'Covid 19 graphics, news and information. Covid 19 animations.'},
      {name: 'robots', content: 'index, follow'}
    ]);
    

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



  initializeMap(map: Map) {
  //   this.map = map;
  //   console.log('mouse initalize event');
  //  this.data = this.ApiService.getData.subscribe(res =>{
  //  this.data = res; 
  //  console.log(this.data);
  //   }
  //  );
  //  console.log(JSON.parse(this.data));
  //   console.log(this.data);
  // console.log(JSON.stringify(test));
  // map.addLayer(geoJSON(JSON.parse(test)));

  }
  

  public leftlClickEvent(event: any) {
  }

  public mouseOverEvent(event: Event){
    console.log('mouse over event');
  }

  public mouseOutEvent(event: Event){
    console.log('mouse out event');

  }





}
