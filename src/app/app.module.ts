import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/search/search.component';
import { ComidaPageComponent } from './components/pages/comida-page/comida-page.component';
import { CanastaPageComponent } from './components/pages/canasta-page/canasta-page.component';
import { TituloComponent } from './components/partials/titulo/titulo.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { InfoPagoPageComponent } from './components/pages/info-pago-page/info-pago-page.component';
import { PedidoListaItemsComponent } from './components/partials/pedido-lista-items/pedido-lista-items.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapaComponent } from './components/partials/mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ComidaPageComponent,
    CanastaPageComponent,
    TituloComponent,
    LoginComponent,
    RegistroComponent,
    NotFoundComponent,
    InfoPagoPageComponent,
    PedidoListaItemsComponent,
    TextInputComponent,
    InputContainerComponent,
    InputValidationComponent,
    MapaComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
