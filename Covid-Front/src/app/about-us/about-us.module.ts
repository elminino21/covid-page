import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
   exports: [AboutComponent]
})
export class AboutUsModule { }
