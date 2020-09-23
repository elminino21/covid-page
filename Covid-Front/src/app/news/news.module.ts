import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { NewsComponent } from './news/news.component';



@NgModule({
  exports: [NewsComponent],
  declarations: [NewsComponent],
  imports: [
    CommonModule,MatSidenavModule
  ]
})
export class NewsModule { }
