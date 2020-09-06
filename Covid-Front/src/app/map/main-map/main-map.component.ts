import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.DisplayMap();
  }

  private  DisplayMap(): void
  {

    $(".container").mapael({
    map : {
        name : "world_countries"
    }
});
  }

}
