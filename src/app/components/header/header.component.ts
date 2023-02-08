import { Component, Input, OnInit } from '@angular/core';
import { CanastaService } from 'src/app/services/canasta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/models/Usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  canastaCantidad = 0;
  usuario!: Usuario;
  constructor(canastaService:CanastaService, private usuarioServicio:UsuarioService) {
    canastaService.getCanastaObservable().subscribe((nuevaCanasta) =>{
      this.canastaCantidad = nuevaCanasta.itemsTotal;
    })

    usuarioServicio.usuarioObservable.subscribe((nuevoUsuario)=>{
      this.usuario = nuevoUsuario;
    })
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioServicio.logout();
  }

}
