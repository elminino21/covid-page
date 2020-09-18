import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { ErrorModule } from './error/error.module';
import { AboutUsModule } from './about-us/about-us.module';
import { HireMeModule } from './hire-me/hire-me.module';
import { NewsModule } from './news/news.module';
import { MapModule } from './map/map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    HireMeModule,
    AboutUsModule,
    ErrorModule,
    ShellModule,
    BrowserAnimationsModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
