import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { RexVisuComponent } from './rex-visu/rex-visu.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: RexVisuComponent },
    { path: '**', redirectTo: 'home' }
];
// { path: 'menu', component: MenuComponent, outlet: 'sidebar' },
// { path: '', pathMatch: 'full', redirectTo: 'login' },

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
