import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngTuple, map, Map } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private readonly DEFAULT_LATLNG: LatLngTuple = [13.76, 21.78];
  @ViewChild('map', {static:true}) //selecciona un tag del html
  mapaRef!:ElementRef; 
  //Cuando se muestre el componente mapa, se tendra acceso al div mapa del html
  
  mapa!:Map;
  constructor() { }

  ngOnInit(): void {
  }

  inicializarMapa(){
    if(this.mapa) return;

    this.mapa = map(this.mapaRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG,1);
    
  }
}
