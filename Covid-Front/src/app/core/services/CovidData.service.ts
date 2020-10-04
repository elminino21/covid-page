import { SafeStyle } from '@angular/platform-browser';
import { CoreModule } from '../core.module';
import { color } from 'd3';
import { Observable } from 'rxjs';
import { statesData } from '../../../assets/geoJson/custom';
import { covid } from '../../../assets/geoJson/covidByDate';

import {CountryTotal } from '../../map/Models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: CoreModule

})

export class CovidData {

  private _lowCase: number = Number.MAX_VALUE;
  private _lowDeath: number = Number.MAX_VALUE;
  private _hightCases: number = 0;
  private _hightDeath: number = 0;
  private _countryCases: CountryTotal[] = [];


  constructor() {
   this.calCovidCases();
   this.mergeGeoAndCovidData();
   console.log('covid service instanciated');
  }


  public mergeGeoAndCovidData() {
    let death = 0;
    statesData.features.forEach(element => {
      this.countryCases.forEach(country => {

        if (String(element.properties.sovereignt).toUpperCase() == country.countriesAndTerritories.toUpperCase()) {
          // console.log( String(element.properties.sovereignt).toUpperCase() + "    " + country.countriesAndTerritories.toUpperCase() ) ;
          death = country.deaths;
          country.color = this.colorManager(death)
          element.properties.covid = country
          return;
        }
      }
      );
    });
  }



  private colorManager(death ): string {


           return this.getColor(this.calculatePercentage( death ,this.hightDeath));

  }




  private calCovidCases(): void {
    let temp: CountryTotal[] = covid.records
    temp.forEach(element => {


      if (this.countryCases.length == 0) {

        this.countryCases.push(element);

      }
      else if (element.countriesAndTerritories == this.countryCases[this.countryCases.length - 1].countriesAndTerritories) {

        this.countryCases[this.countryCases.length - 1].cases += element.cases;
        this.countryCases[this.countryCases.length - 1].deaths += element.deaths;

      } else {


        if (this.countryCases[this.countryCases.length - 1].cases < this.lowCase) {
          this.lowCase = this.countryCases[this.countryCases.length - 1].cases;

        }
        if (this.countryCases[this.countryCases.length - 1].deaths < this.lowDeath) {
          this.lowDeath = this.countryCases[this.countryCases.length - 1].deaths;

        }


        if (this.countryCases[this.countryCases.length - 1].cases > this.hightCases) {
          this.hightCases = this.countryCases[this.countryCases.length - 1].cases;

        }
        if (this.countryCases[this.countryCases.length - 1].deaths > this.hightDeath) {
          this.hightDeath = this.countryCases[this.countryCases.length - 1].deaths;

        }
        this.countryCases.push(element);

      }

    });


    this.countryCases.sort((a, b) => (a.cases > b.cases) ? -1 : 1);
  }


  private getColor(percent): string {
    return percent > 80
      ? '#FC4332'
      : percent > 60
        ? '#f88d2e'
        : percent > 40
          ? '#f7982d'
          : percent > 20
            ? '#eec425'
            : percent > 5
              ? '#e2e519'
              : "#1BF74A";
  }

  private calculatePercentage(countryCount: number, worldHight: number): number {
    return (countryCount / worldHight) * 100;
  }

  public get lowCase(): number {
    return this._lowCase;
  }
  public set lowCase(value: number) {
    this._lowCase = value;
  }
  public get lowDeath(): number {
    return this._lowDeath;
  }
  public set lowDeath(value: number) {
    this._lowDeath = value;
  }
  public get hightCases(): number {
    return this._hightCases;
  }
  public set hightCases(value: number) {
    this._hightCases = value;
  }
  public get hightDeath(): number {
    return this._hightDeath;
  }
  public set hightDeath(value: number) {
    this._hightDeath = value;
  }
  // public getCovidCases() {
  //   return this._countryCases;
  // }

  public get countryCases(): CountryTotal[] {
    return this._countryCases;
  }
  public set countryCases(value: CountryTotal[]) {
    this._countryCases = value;
  }
  public get statesData()
  {
    return statesData;
  }

}