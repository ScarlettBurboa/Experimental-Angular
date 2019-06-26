import { Component, OnInit } from '@angular/core';
import { Zapatilla } from './../models/zapatilla';
import { ZapatillaService  } from './../services/zapatilla.service'; //importamos el servicio zapatillaservice

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService] //inyectamos el servicio zapatillaservice como un providers
})
export class ZapatillasComponent implements OnInit {
  public zapatillas: Array<Zapatilla>;
  public marcas: string[]; //creamos una propiedad llamada marca que es un array de string
  public color:string;
public mi_marca: string;
  constructor(private _zapatillaServices: ZapatillaService
    ) //le pasamos al constructor el servicio creado arriba en los providers
    {
    this.color = 'blue';
    this.marcas = new Array(); //la definimos dentro dentro de el contructor como un array
    
  }

  ngOnInit() {
    this.zapatillas = this._zapatillaServices.getZapatilla(); //cargamos el servicio para que lo muestre el front
    this.getMarcas();
  }
  getMarcas() {//creamos metodo get Marca para rrecorrer el array zapatillas y mostrar las marcas
    this.zapatillas.forEach((zapatilla, index) => {//usamos un foreach para rrecorrer el array
      if(this.marcas.indexOf(zapatilla.marca) <0){//elimina duplicados de marcas
        this.marcas.push(zapatilla.marca);// hacemos un push para que los elementos encontrados los coloque en el array marcas de arriba
      }
    });
    console.log(this.marcas); //mostramos marcas array
  }
  getMarca(){
    alert(this.mi_marca);
  }
  addMarca(){//metodo para añadir marca a un array MArcas
    this.marcas.push(this.mi_marca);//se menciona el arry y se hace push a ese array del valor que tiene el input 
  }
  borrarMarca(index){
    // una forma es = delete this.marcas[index];
    //otra forma es;
    this.marcas.splice(index, 1);
  }
  onBlur(){
    console.log('haz salido del input');
  }
  mostrarPalabra(){
    alert(this.mi_marca);
  }
}
