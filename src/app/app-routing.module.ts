import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanastaPageComponent } from './components/pages/canasta-page/canasta-page.component';
import { ComidaPageComponent } from './components/pages/comida-page/comida-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},//Redirreciona a el home pero con el termino de busqueda
  {path: 'comida/:id', component:ComidaPageComponent},
  {path: 'canasta-page', component:CanastaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
