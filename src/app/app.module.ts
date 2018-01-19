import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { TitrePrincipalComponent } from './titre-principal/titre-principal.component';
import { SousTitreComponent } from './sous-titre/sous-titre.component';
import { TitrePageComponent } from './titre-page/titre-page.component';
import { SousSousTitreComponent } from './sous-sous-titre/sous-sous-titre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    TitrePrincipalComponent,
    SousTitreComponent,
    TitrePageComponent,
    SousSousTitreComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
