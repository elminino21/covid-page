import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { latLng, MapOptions, tileLayer, Map, geoJSON, Layer} from 'leaflet';
import {  ApiService, CovidData} from 'src/app/core/services';
@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

   private map: Map;
  public options: MapOptions;
  private lastLayer: any;
  private data: any;
  

  constructor(private title:Title, private metaService: Meta, private ApiService: ApiService, private covidData: CovidData  ) {
   }

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

  }


 layers = [geoJSON(this.covidData.statesData, {style: function (feature) {
   let temp = feature.properties.covid

   if(typeof temp !== "undefined"){
       return {
       fillColor: feature.properties.covid.color,
       weight: 2,
       opacity: 1,
       color: 'black',
       dashArray: '3',
       fillOpacity: 0.7
   }; 
   }else{
     return  {
       fillColor: '#FC4332',
       weight: 2,
       opacity: 1,
       color: 'black',
       dashArray: '3',
       fillOpacity: 0.7
     }
   }

 }}

 )];

 
  

  public leftlClickEvent(event: any) {
  }

  public mouseOverEvent(e: Map){
  }

  public mouseOutEvent(event: Event){
    console.log('mouse out event');

  }






}
