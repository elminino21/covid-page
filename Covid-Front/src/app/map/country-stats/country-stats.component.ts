import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  @Input() country: String ;
  @Input() cases: number ;
  @Input() death: number ;

  constructor() { }

  ngOnInit(): void {
  }

}
