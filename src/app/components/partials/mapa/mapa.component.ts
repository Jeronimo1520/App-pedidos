import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { icon, latLng, LatLng, LatLngExpression, LatLngLiteral, LatLngTuple, map, Map, marker, Marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private readonly ZOOM_LEVEL_MARKER = 16;
  private readonly MARKER_ICON = icon({
    iconUrl:
    "https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png",
    iconSize:[42,42],
    iconAnchor:[21,42],
  });
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.76, 21.78];

  @ViewChild('map', {static:true}) //selecciona un tag del html
  mapaRef!:ElementRef; 
  //Cuando se muestre el componente mapa, se tendra acceso al div mapa del html
  
  mapa!:Map;
  markerActual!:Marker;
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.inicializarMapa()
  }

  inicializarMapa(){
    if(this.mapa) return;

    this.mapa = map(this.mapaRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG,1);
    
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.mapa);
  }

  encontrarMyLocation(){
    this.locationService.obtenerLocationActual().subscribe({
      next: (latlng) =>{
        console.log(latlng)
        this.mapa.setView(latlng, this.ZOOM_LEVEL_MARKER)
        this.setMarker(latlng)
      }
    })
  }

  setMarker(latlng:LatLngExpression){
    if(this.markerActual)
    {
      this.markerActual.setLatLng(latlng); 
      return;
    }
      this.markerActual = marker(latlng,{
        draggable:true,
        icon:this.MARKER_ICON
      }).addTo(this.mapa)
  }
}
