import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanastaService } from 'src/app/services/canasta.service';
import { Pedido } from 'src/app/shared/models/Pedido';

@Component({
  selector: 'app-info-pago-page',
  templateUrl: './info-pago-page.component.html',
  styleUrls: ['./info-pago-page.component.css']
})
export class InfoPagoPageComponent implements OnInit {

  pedido: Pedido = new Pedido()
  infoPagoForm!: FormGroup;
  checkoutForm: any;
  fc: any;
  order: any;
  constructor(canastaService:CanastaService,
    private formBuilder: FormBuilder,
    // private usuarioService:UserService,
     //private toastrService:ToastrService
     ) { 
      const canasta = canastaService.getCanasta();
      this.pedido.items = canasta.items;
      this.pedido.precioTotal = canasta.precioTotal;
     console.log(this.pedido.items)
     }

  ngOnInit(): void {
    //let {name,addres} = this.usuarioService.usuarioActual
    // this.infoPagoForm = this.formBuilder.group({
    //   name:[name, Validators.required],
    //   address: [address,Validators.required ]
    // })
  }

  // get fc(){
  //   return this.infoPagoForm.controls;
  // }

  crearPedido(){
    // if(this.infoPagoForm.invalid){
    //   this.toastrService.warning("Por favor llene los espacios")
    //   return;
    // }
  }

}
