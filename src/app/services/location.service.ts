import { Injectable } from '@angular/core';
import { LatLng, LatLngExpression, LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  obtenerLocationActual():Observable<LatLngExpression>{
    return new Observable((observer)=>{
      if(!navigator.geolocation) return;

      return navigator.geolocation.getCurrentPosition(
        (pos)=>{
          observer.next({
            lat:pos.coords.latitude,
            lng: pos.coords.longitude
          })
        },
        (error) =>{
          observer.error(error);
        }
      )
    })
  }
}
