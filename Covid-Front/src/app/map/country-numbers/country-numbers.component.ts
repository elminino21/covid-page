import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-numbers',
  templateUrl: './country-numbers.component.html',
  styleUrls: ['./country-numbers.component.scss']
})
export class CountryNumbersComponent implements OnInit {

  @Input() country: string;
  @Input() causes: number;
  @Input() death: number;

  constructor() { }

  ngOnInit(): void {
  }

}
