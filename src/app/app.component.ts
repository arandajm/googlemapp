import { Component } from '@angular/core';
import {Marker} from './marker';
import {MarkerService} from './services/marker.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})

export class AppComponent {
  title = 'GoogleMapp!!!';
  //Zoom level
  zoom: number= 10;

  //Start Position La Plata
  lat: number = -34.920901; 
  lng: number = -57.953794;
  
  //Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: boolean;
 
  //Markers
  markers: Marker[];

/*  //Markers
  markers: Marker[] = [
  {
    name: 'Punto 1',
    lat: -34.920901,  //-34.920901, -57.953794
    lng: -57.953794,
    draggable: true
  },
  {
    name: 'Punto 2',
    lat: -34.920669,  //-34.920669, -57.941558
    lng: -57.941558,
    draggable: true
  },
  {
    name: 'Punto 3',
    lat: -34.931647, //-34.931647, -57.940850
    lng: -57.940850,
    draggable: true
  }
];*/

constructor(private _markerService: MarkerService){
  //Get Markers from LocalStorage
  this.markers = this._markerService.getMarkers();
}

clickedMarker(m: Marker, index: number){
  console.log('Clicked marker: ' +m.name+ 'at index: ' +index);
}

mapCicked($event: any){
  var newMarker = {
    name: 'Untitled',
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: false
  }

  this.markers.push(newMarker);
}

markerDragEnd(m: any, $event: any){
  console.log('dragEnd', m, $event);

  var uptmarker = {
    name: m.name,
    lat: parseFloat(m.lat),
    lng: parseFloat(m.lng),
    draggable: false
  }

  var newLat = $event.coords.lat;
  var newLng = $event.coords.lng;
}

addMarker(){
  console.log('Adding Marker');
  var isDraggable;
  if (this.markerDraggable) {
    isDraggable=true;
  } else {
    isDraggable=false;
  }
  var newMarker = {
  name: this.markerName,
  lat: parseFloat(this.markerLat),
  lng: parseFloat(this.markerLng),
  draggable: isDraggable
  } 

  this.markers.push(newMarker);
  this._markerService.addMarker(newMarker);
}

}

/*//Marker Type
interface marker{
  // ? = Opcional 
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}*/

