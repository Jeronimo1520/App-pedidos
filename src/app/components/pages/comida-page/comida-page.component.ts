import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CanastaService } from 'src/app/services/canasta.service';
import { ComidaService } from 'src/app/services/comida.service';
import { Comida } from 'src/app/shared/models/Comida';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent implements OnInit {
  comida!: Comida;
  constructor(activatedRoute:ActivatedRoute, comidaService:ComidaService,
    private canastaService:CanastaService, private router: Router) {
    activatedRoute.params.subscribe((params) =>{
      if(params['id'])
      this.comida = comidaService.getComidaById(params['id']);
    })
   }

  ngOnInit(): void {
  }

  addToCanasta(){ 
    this.canastaService.addToCanasta(this.comida);
    this.router.navigateByUrl('/canasta-page');
  }
}
