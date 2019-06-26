import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';//importamos el modelo que tendrá el servicio

@Injectable({
  providedIn: 'root'
})
export class ZapatillaService {
  public zapatillas: Array<Zapatilla> //creamos una variable publica con el array de zapatillas
  constructor() {
    this.zapatillas = [
      new Zapatilla('riguk', 'ribuk', 'blanco', 80, true),
      new Zapatilla('leon', 'nike', 'negro', 100, false),
      new Zapatilla('wide', 'addidas', 'azul', 90, true)
    ];
   }
   getTexto(){
     return 'hola mundo desde un servicio';
   }
   getZapatilla(): Array<Zapatilla>{
     return this.zapatillas //solo retorna las zapatillas en un array
   }

}
