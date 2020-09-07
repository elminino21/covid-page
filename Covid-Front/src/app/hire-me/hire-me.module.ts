import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireMeComponent } from './hire-me/hire-me.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';;



@NgModule({
  exports: [HireMeComponent],
  declarations: [HireMeComponent],
  imports: [
    CommonModule,
     MatFormFieldModule,
     FormsModule,
     MatButtonModule

  ]
})
export class HireMeModule { }
