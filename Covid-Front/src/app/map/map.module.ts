import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMapComponent } from './main-map/main-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { WorldMapComponent } from './world-map/world-map.component';
import { CountryMapComponent } from './country-map/country-map.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import {MatCardModule} from '@angular/material/card';
import { CountryNumbersComponent } from './country-numbers/country-numbers.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
   exports: [MainMapComponent],
  declarations: [MainMapComponent, WorldMapComponent, CountryMapComponent, CountryStatsComponent, CountryNumbersComponent],
  imports: [
    CommonModule,
      LeafletModule,
      MatTabsModule,
      MatCardModule,
      HttpClientModule
  ]
})
export class MapModule { }
