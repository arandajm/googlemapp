import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleMapp!!!';
  lat: number = -34.920901; 
  lng: number = -57.953794; //-34.920901, -57.953794
}
