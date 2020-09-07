import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';



@NgModule({
  declarations: [ErrorComponent, NotauthorizedComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorComponent, NotauthorizedComponent ]
})
export class ErrorModule { }
