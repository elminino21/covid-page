import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import {Address } from '../models'

@Injectable({
  providedIn: CoreModule
})
export class ApiService {

  constructor(
     private http: HttpClient) { }
    
    public get getAPIMain()
    {
      return this.http.get(Address.mainPage);
    }
    public get getJson()
    {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
      // return this.http.get('https://leafletjs.com/examples/choropleth/us-states.js');
    }
    public get getData()
    {
      // return this.http.get('https://jsonplaceholder.typicode.com/posts');
      return this.http.get('../../../assets/geoJson/us-states.json');
    }
}
