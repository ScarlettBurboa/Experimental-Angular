import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public  title = 'Angular :)';
 public mostrar_videojuegos:boolean = false;

 ocultar_videojuegos(value){
   this.mostrar_videojuegos = value;
 }
}
