import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanastaPageComponent } from './components/pages/canasta-page/canasta-page.component';
import { ComidaPageComponent } from './components/pages/comida-page/comida-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoPagoPageComponent } from './components/pages/info-pago-page/info-pago-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'search/:searchTerm', component:HomeComponent},//Redirreciona a el home pero con el termino de busqueda
  {path: 'comida/:id', component:ComidaPageComponent},
  {path: 'canasta-page', component:CanastaPageComponent},
  {path: 'infoPago-page' , component:InfoPagoPageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'Home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
