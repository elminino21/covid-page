import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMapComponent } from './main-map/main-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryMapComponent } from './country-map/country-map.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
   exports: [MainMapComponent],
  declarations: [MainMapComponent, WorldMapComponent, CountryMapComponent],
  imports: [
    CommonModule,
      LeafletModule,
      MatTabsModule
  ]
})
export class MapModule { }
