/**
 * Un modelo representa a un solo objeto no a millones de objetos, 
 * es por ello que el nombre de los archivos, siempre deben llamarse en
 * singular y no en plural
 */
export class Zapatilla{
 /* Esto seria de forma literal y sin metodos ts
  public nombre:string;
  public marca:string;
  public color:string;
  public precio:number;
  public stock:boolean;

  constructor(nombre, marca, color, precio, stock){
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }*/

  constructor(
    public nombre:string,
    public marca:string,
    public color:string,
    public precio:number,
    public stock:boolean){
  

  }
}
