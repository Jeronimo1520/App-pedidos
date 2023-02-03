import { Comida } from "./Comida";

export class CanastaItem{
    constructor(public comida:Comida){}
    cantidad:number = 1;
    precio:number = this.comida.precio;
}