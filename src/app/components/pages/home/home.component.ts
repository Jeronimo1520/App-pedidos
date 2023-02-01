import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/app/services/comida.service';
import { Comida } from 'src/app/shared/models/Comida';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comidas:Comida[] = []; //Guarda lda data que obtengamos del servicio
  constructor(private comidaService: ComidaService) { //Usamos el servicio para usar el metodo getAll
    this.comidas = comidaService.getAll()
  }

  ngOnInit(): void {
  }

}
