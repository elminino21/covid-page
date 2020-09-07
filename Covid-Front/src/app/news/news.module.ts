import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';



@NgModule({
  exports: [NewsComponent],
  declarations: [NewsComponent],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
