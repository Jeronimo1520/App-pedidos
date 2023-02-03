import { Injectable } from '@angular/core';
import { comida_ejemplos } from 'src/data';
import { Comida } from '../shared/models/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor() { }

  getAll():Comida[]{ //Obtener todas las comidas
    return comida_ejemplos;
  } 

  getAllComidasBySearch(searchTerm:string){
    return this.getAll().filter(comida => (comida.nombre).toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getComidaById(comidaId:string):Comida{
    return this.getAll().find(comida => comida.id == comidaId)
    ?? new Comida() //knowledge coelesing mark
  }
}
