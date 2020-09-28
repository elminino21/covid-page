import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  public country = 'united state';
  public cases = 200000;

  constructor() { }

  ngOnInit(): void {
  }

}
