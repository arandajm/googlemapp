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

    updateMarker(updateMarker, newLat, newLng){
         //Recuperamos la lista de marcadores
         var markers = JSON.parse(localStorage.getItem('markers'));
         //Iteramos sobre la coleccion de marcadores para encontrar y modificar el seleccionado
         markers.forEach(marker => {
             if (marker.lat === updateMarker.lat && marker.lng === updateMarker.lng) {
                 marker.lat = newLat;
                 marker.lng = newLng;
             }
         });
         
         //Actualizamos la lista en el localStorage
         localStorage.setItem('markers',JSON.stringify(markers));
     }

    deleteMarker(markerToDelete){
     console.log('Removing Marker....');
     //Recuperamos la lista de marcadores
    var markers = JSON.parse(localStorage.getItem('markers'));
    //Iteramos sobre la coleccion de marcadores para encontrar y modificar el seleccionado
    //Recorremos la colecccion y encontramos el marcador a eliminar
    for (var index = 0; index < markers.length; index++) {
        if (markers[index].lat === markerToDelete.lat && markers[index].lng === markerToDelete.lng) {
            markers.splice(index, 1);
        } 
    }
         
    //Actualizamos la lista en el localStorage
    localStorage.setItem('markers',JSON.stringify(markers));
}
}