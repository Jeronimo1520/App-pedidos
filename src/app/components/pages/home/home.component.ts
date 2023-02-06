import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ComidaService } from 'src/app/services/comida.service';
import { Comida } from 'src/app/shared/models/Comida';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visible = false;
  comidas:Comida[] = []; //Guarda lda data que obtengamos del servicio
  constructor(private comidaService: ComidaService, activatedRoute:ActivatedRoute ) { //Usamos el servicio para usar el metodo getAll
    let comidasObservable: Observable<Comida[]>;
    activatedRoute.params.subscribe((params) =>{
      if(params['searchTerm'])
      comidasObservable = this.comidaService.getAllComidasBySearch(params['searchTerm']);
      else
      comidasObservable = comidaService.getAll()

      comidasObservable.subscribe((serverComidas) =>{
        this.comidas = serverComidas
      })
    })
   
  }

  ngOnInit(): void {
  }

}
