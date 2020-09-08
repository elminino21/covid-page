import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireMeComponent } from './hire-me/hire-me.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  exports: [HireMeComponent],
  declarations: [HireMeComponent],
  imports: [
    CommonModule,
     MatFormFieldModule,
     FormsModule,
     MatButtonModule,
     MatRadioModule,
     MatCheckboxModule,
     ReactiveFormsModule,
     MatSelectModule

  ]
})
export class HireMeModule { }
