import { Component, OnInit } from '@angular/core';
import { CanastaService } from 'src/app/services/canasta.service';
import { Canasta } from 'src/app/shared/models/Canasta';
import { CanastaItem } from 'src/app/shared/models/CanastaItem';

@Component({
  selector: 'app-canasta-page',
  templateUrl: './canasta-page.component.html',
  styleUrls: ['./canasta-page.component.css']
})
export class CanastaPageComponent implements OnInit {
  canasta!: Canasta;
  constructor(private canastaService: CanastaService) { 
    this.canastaService.getCanastaObservable().subscribe((canasta) =>{
      this.canasta= canasta;
    })
  }

  ngOnInit(): void {
  }

  removerDeCanasta(canastaItem:CanastaItem){
    this.canastaService.removeFromCanasta(canastaItem.comida.id);
  }

  cambiarCantidad(canastaItem:CanastaItem, cantidadString:string){
    const cantidad = parseInt(cantidadString);
    this.canastaService.cambiarCantidad(canastaItem.comida.id, cantidad)
  }
}
