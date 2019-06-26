import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  //decorador
  declarations: [
    //declaracion de componentes, pipes y directivas
    AppComponent,
    VideojuegosComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  //importacion de modulos
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  //carga servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
