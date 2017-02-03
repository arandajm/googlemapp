//Marker Type
export interface Marker{
  // ? = Opcional 
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}