import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { IUsuarioRegistro } from '../shared/interfaces/IUsuarioRegistro';
import { ValidacionDePasswords } from '../shared/validators/validators.passwords';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro!:FormGroup;
  isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      nombre:['',Validators.required],
      correo: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmarPassword: ['',Validators.required],
      // direccion: ['',Validators.required],
      ciudad: ['',Validators.required],
      telefono: ['',Validators.required]

    },{
      validators: ValidacionDePasswords('password','confirmarPassword')
    });
  }

  get fc(){
    return this.formRegistro.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.formRegistro.invalid) return;

    const fv = this.formRegistro.value;
    const usuario: IUsuarioRegistro={
      nombre: fv.nombre,
      correo: fv.correo,
      password: fv.password,
      confirmarPassword: fv.confirmarPassword,
      ciudad: fv.ciudad
    };

    this.usuarioService.registrar(usuario).subscribe(_ =>{
      this.router.navigateByUrl('/Home')
    })
  }
}
