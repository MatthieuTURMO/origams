import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { TitrePrincipalComponent } from './titre-principal/titre-principal.component';
import { SousTitreComponent } from './sous-titre/sous-titre.component';
import { TitrePageComponent } from './titre-page/titre-page.component';
import { SousSousTitreComponent } from './sous-sous-titre/sous-sous-titre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { SousSousTitre2Component } from './sous-sous-titre-2/sous-sous-titre-2.component';
import { ParagrapheRedLineComponent } from './paragraphe-red-line/paragraphe-red-line.component';
import { RexVisuComponent } from './rex-visu/rex-visu.component';
import { RexTimelineVisuComponent } from './rex-timeline-visu/rex-timeline-visu.component';
import { TableauComponent } from './tableau/tableau.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RexFormComponent } from './rex-form/rex-form.component';
import { RexTimelineFormComponent } from './rex-timeline-form/rex-timeline-form.component';
import {MatMenuModule} from '@angular/material/menu';
import { RexCapitalisationFormComponent } from './rex-capitalisation-form/rex-capitalisation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    TitrePrincipalComponent,
    SousTitreComponent,
    TitrePageComponent,
    SousSousTitreComponent,
    NavbarComponent,
    SousSousTitre2Component,
    ParagrapheRedLineComponent,
    RexVisuComponent,
    RexTimelineVisuComponent,
    TableauComponent,
    RexFormComponent,
    RexTimelineFormComponent,
    RexCapitalisationFormComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxDatatableModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
