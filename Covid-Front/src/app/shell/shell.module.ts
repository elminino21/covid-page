import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  exports: [NavComponent],
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class ShellModule { }
