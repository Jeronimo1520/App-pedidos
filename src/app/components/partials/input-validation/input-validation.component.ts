import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MENSAJES:any = {
  required:'No deberia estar vacio',
  email:'Email no es valido',
  minlength: 'Campo es muy corto',
  notMatch: 'Contraseña y confirmacion no coinciden'
}

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit {

  @Input()
  control!:AbstractControl;
  @Input()
  mostrarErrorCuando:boolean = true;
  errorMensajes: string[] = []

  
  constructor() { }

  ngOnInit(): void {
  }

  checkValidaciones(){
    const errores = this.control.errors;
    if(!errores){
      this.errorMensajes = [];
      return;
    }

    const errorKeys = Object.keys(errores);
    this.errorMensajes=errorKeys.map(key => VALIDATORS_MENSAJES[key]);
  }

 
}
