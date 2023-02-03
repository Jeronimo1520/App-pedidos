import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/search/search.component';
import { ComidaPageComponent } from './components/pages/comida-page/comida-page.component';
import { CanastaPageComponent } from './components/pages/canasta-page/canasta-page.component';
import { TituloComponent } from './components/partials/titulo/titulo.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ComidaPageComponent,
    CanastaPageComponent,
    TituloComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RatingModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
