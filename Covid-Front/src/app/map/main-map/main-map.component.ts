import { Component, OnInit  } from '@angular/core';
import { CovidData } from 'src/app/core/services';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit {

  // countries = this.covidData.countryCases;

  constructor(public covidData: CovidData) { }
  ngOnInit(): void {
  }

}
