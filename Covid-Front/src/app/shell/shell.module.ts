import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [NavComponent],
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
  ]
})
export class ShellModule { }
