import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMapComponent } from './main-map/main-map.component';



@NgModule({
   exports: [MainMapComponent],
  declarations: [MainMapComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
