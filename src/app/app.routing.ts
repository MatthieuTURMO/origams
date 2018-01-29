import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { RexVisuComponent } from './rex-visu/rex-visu.component';
import { RexFormComponent } from './rex-form/rex-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'visu', pathMatch: 'full' },
    { path: 'visu', component: RexVisuComponent },
    { path: 'form', component: RexFormComponent },
    { path: '**', redirectTo: 'visu' }
];
// { path: 'menu', component: MenuComponent, outlet: 'sidebar' },
// { path: '', pathMatch: 'full', redirectTo: 'login' },

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
