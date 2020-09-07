import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from './shell/shell.module';
import { MapModule } from './map/map.module';
import { ErrorModule } from './error/error.module';
import { AboutUsModule } from './about-us/about-us.module';
import { HireMeModule } from './hire-me/hire-me.module';
import { NewsModule } from './news/news.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    BrowserAnimationsModule,
    MapModule,
    ErrorModule,
    AboutUsModule,
    HireMeModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
