import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.page.html',
  styleUrls: ['./detalle-reserva.page.scss'],
})
export class DetalleReservaPage implements OnInit {

  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = +(this.activatedRoute.snapshot.paramMap.get("id") || "");
  }

}
