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
    return this.getAll().filter(comida => comida.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
