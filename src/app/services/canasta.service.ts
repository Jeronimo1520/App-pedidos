import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Canasta } from '../shared/models/Canasta';
import { CanastaItem } from '../shared/models/CanastaItem';
import { Comida } from '../shared/models/Comida';

@Injectable({
  providedIn: 'root'
})
export class CanastaService {
  private canasta:Canasta = this.getCanastaFromLocalStorage()
  private canastaSubject: BehaviorSubject<Canasta> = new BehaviorSubject(this.canasta);

  constructor() { }

  addToCanasta(comida:Comida):void{
    let canastaItem = this.canasta.items.find(item => item.comida.id == comida.id)
    if(canastaItem)
    return;

    this.canasta.items.push(new CanastaItem(comida));
    this.setCanastaToLocalStorage();
  }

  removeFromCanasta(comidaId:string):void{
    this.canasta.items = this.canasta.items.filter(item => item.comida.id != comidaId)
    this.setCanastaToLocalStorage();
  }

  cambiarCantidad(comidaId:string, cantidad:number){
    let canastaItem = this.canasta.items.find(item => item.comida.id == comidaId);
    if(!canastaItem) return;

    canastaItem.cantidad = cantidad;
    canastaItem.precio = cantidad * canastaItem.comida.precio
    this.setCanastaToLocalStorage();
  }

  limpiarCanasta(){
    this.canasta = new Canasta()
    this.setCanastaToLocalStorage();
  }

  getCanastaObservable():Observable<Canasta>{
    return this.canastaSubject.asObservable();
  }

  //Usaremos este metodo para guardar en el local storage
  private setCanastaToLocalStorage():void{
    this.canasta.precioTotal = this.canasta.items.reduce((prevSum, currentItem)=> prevSum + currentItem.precio,0)
    //usamos reduce para que por cada item se vaya sumando el precio de cada item, inicializamos en cero

    this.canasta.itemsTotal = this.canasta.items.reduce((prevSum, currentItem) => prevSum + currentItem.cantidad,0)
    //mismo metodo reduce para obtener la cantidad total de items

    const canastaJson = JSON.stringify(this.canasta);
    localStorage.setItem('Canasta',canastaJson)
    this.canastaSubject.next(this.canasta);
  }

  private  getCanastaFromLocalStorage():Canasta{
    const canastaJson = localStorage.getItem('Canasta')

    return canastaJson? JSON.parse(canastaJson):new Canasta();
    //Si existe una canasta en el local storage entonces parseamos la canasta para qye ya no sea un JSon, si no lo hay, entonces retornamos una nueva canasta, vacia
  }
}
