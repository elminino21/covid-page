import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news/news.component';
import { ErrorComponent } from './error/error/error.component';
import { AboutComponent} from './about-us/about/about.component'
import { HireMeComponent } from './hire-me/hire-me/hire-me.component';
import { MainMapComponent } from './map/main-map/main-map.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DMCAComponent } from './dmca/dmca.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: MainMapComponent  },
   { path: 'news', component: NewsComponent  },
   { path: 'about', component: AboutComponent  },
   { path: 'hire-me', component: HireMeComponent  },
   { path: 'privacy', component: PrivacyPolicyComponent  },
   { path: 'DMCA', component: DMCAComponent  },
   { path: 'disclaimer', component: DisclaimerComponent  },
  { path: 'not-found', component: ErrorComponent  },
   { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
