import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMapComponent } from './main-map/main-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
   exports: [MainMapComponent],
  declarations: [MainMapComponent],
  imports: [
    CommonModule,
      LeafletModule
  ]
})
export class MapModule { }
