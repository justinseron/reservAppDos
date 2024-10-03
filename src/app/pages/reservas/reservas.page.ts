import { Component, OnInit } from '@angular/core';

//Lo primero es agregar un import:
import * as L from 'leaflet';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  //Vamos a crear variable(s) para controlar el mapa:
  private map: L.Map | undefined;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap(){
    //this.map = L.map("map_html").locate({setView:true, maxZoom: 16});
    this.map = L.map("map_html").setView([-33.59839803609597, -70.57884071926678],16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

}
