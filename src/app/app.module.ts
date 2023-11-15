import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { Card1Component } from './card1/card1.component';
import { CquoiComponent } from './cquoi/cquoi.component';
import { Section4Component } from './section4/section4.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MissionsComponent } from './missions/missions.component';
import { MetiersComponent } from './metiers/metiers.component';
import { ContactComponent } from './contact/contact.component';
import { Card2Component } from './card2/card2.component';
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: AccueilComponent
  },
  {
    path: "missions", component: MissionsComponent
  },
  {
    path: "metiers", component: MetiersComponent
  },
  {
    path: "contact", component: ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarousselComponent,
    Card1Component,
    CquoiComponent,
    Section4Component,
    NavbarComponent,
    Navbar2Component,
    AccueilComponent,
    MissionsComponent,
    MetiersComponent,
    ContactComponent,
    Card2Component,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
