import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';



@NgModule({
  exports: [NavComponent],
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class ShellModule { }
