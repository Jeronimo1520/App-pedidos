import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comida_ejemplos } from 'src/data';
import { Comida } from '../shared/models/Comida';
import { COMIDAS_BY_ID_URL, COMIDAS_BY_SEARCH_URL, COMIDAS_URL } from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Comida[]>{ //Obtener todas las comidas
    return this.http.get<Comida[]>(COMIDAS_URL);
  } 

  getAllComidasBySearch(searchTerm:string){
    return this.http.get<Comida[]>(COMIDAS_BY_SEARCH_URL + searchTerm);
  }

  getComidaById(comidaId:string):Observable<Comida>{
    return this.http.get<Comida>(COMIDAS_BY_ID_URL + comidaId);
  }
}
