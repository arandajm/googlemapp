export class Init {
    constructor() { }

    load(){
        //Check localStorage
        if (localStorage.getItem('markers')=== null || localStorage.getItem('markers') === undefined) {
        
            console.log('No markers found!!.... creating!!...');

            var markers = [
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
            ];

            localStorage.setItem('markers', JSON.stringify(markers));
        }else{

            console.log('loading markers!!....');
        }
    }
}