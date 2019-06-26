import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  public listado:string;


  constructor() {
    //Interpolacion: muestro una propiedad en la vista, por ejemplo
    //la propiedad creada arriba como publica llamada titulo, es un string
    //y aca asignamos el valor, para mostrar en el html (ver hmtl) {{}}
    this.titulo = 'Componente de Video Juegos';
    console.log('se ha cargado bien el componente :)')
   }
//ver apuntes 
  ngOnInit() {
    console.log('onInit ejecutado, se ejecuta al Inicio del componente');
  }
  ngDoCheck(){
    console.log('Docheck ejecutado, se ejecuta cuando hay un cambio en el componente');
  }
  ngOnDestroy(){
    console.log('OnDestroy ejecutado, se ejecuta al eliminar un componente');
  }
  cambiarTitulo(){
    this.titulo = "Nuevo titulo del componente";
  }
}
