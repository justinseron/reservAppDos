import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //aquí podemos crear variables:
  //NOMBRE: TIPO = VALOR;
  //NOMBRE = Clase(VALOR);
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl('',[Validators.required]),
    genero: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9.]@duocuc.cl")]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(18)]),
    valida_contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(18)]),
    tiene_equipo: new FormControl('no',[Validators.required]),
    nombre_equipo: new FormControl('',[])
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //podemos crear métodos:
  public registrar():void{
    this.router.navigate(['/login']);
  }

}
