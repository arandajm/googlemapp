import { Injectable } from '@angular/core';
import {Init} from '../init.markers';


@Injectable()
export class MarkerService extends Init {

    constructor() {
        super();
        console.log('MarkerService Initialized....');
        //Invoke load from Init
        this.load();
     }

     getMarkers(){
         var markers = JSON.parse(localStorage.getItem('markers'));
         return markers;
     }

     addMarker(newMarker){
         //Recuperamos la lista de marcadores
         var markers = JSON.parse(localStorage.getItem('markers'));
         //Agregamos el nuevo marcador
         markers.push(newMarker);
         //Actualizamos la lista en el localStorage
         localStorage.setItem('markers',JSON.stringify(markers));
     }
}