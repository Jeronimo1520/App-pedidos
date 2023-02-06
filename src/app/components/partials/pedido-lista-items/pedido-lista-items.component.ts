import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/Pedido';

@Component({
  selector: 'app-pedido-lista-items',
  templateUrl: './pedido-lista-items.component.html',
  styleUrls: ['./pedido-lista-items.component.css']
})
export class PedidoListaItemsComponent implements OnInit {

  @Input()
  pedido!: Pedido;
  
  constructor() { 
   
  }

  ngOnInit(): void {

  }

}
