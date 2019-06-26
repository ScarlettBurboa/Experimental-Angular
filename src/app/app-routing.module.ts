import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import {HomeComponent} from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},// pasamos un parametro a la url
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/* export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); */
export class AppRoutingModule { }
