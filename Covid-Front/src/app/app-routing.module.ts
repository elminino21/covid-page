import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './shell/nav/nav.component';
import { ErrorComponent } from './error/error/error.component';
import { MainMapComponent } from './map/main-map/main-map.component';
import { AboutComponent} from './about-us/about/about.component'
import { HireMeComponent } from './hire-me/hire-me/hire-me.component';
import { NewsComponent } from './news/news/news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainMapComponent },
   { path: 'about', component: AboutComponent  },
   { path: 'news', component: NewsComponent  },
   { path: 'hire-me', component: HireMeComponent  },
  { path: 'not-found', component: ErrorComponent  },
   { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
