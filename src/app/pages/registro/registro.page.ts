import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //aquí podemos crear variables:
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,}")]),
    fecha_nacimiento: new FormControl('',[Validators.required]),
    genero: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9.]+(@duocuc.cl)")]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(18)]),
    valida_contrasena: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(18)]),
    tiene_equipo: new FormControl('no',[Validators.required]),
    nombre_equipo: new FormControl('',[]),
    tipo_usuario: new FormControl('Alumno')
  });

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  //podemos crear métodos:
  public registrar():void{
    if( !this.validarEdad18(this.persona.controls.fecha_nacimiento.value || "") ){
      alert("ERROR! debe tener al menos 18 años para registrarse!");
      return;
    }
    
    if(this.persona.controls.contrasena.value != this.persona.controls.valida_contrasena.value){
      alert("ERROR! las contraseñas no coinciden!");
      return;
    }

    if(this.usuarioService.createUsuario(this.persona.value)){
      this.router.navigate(['/login']);
      this.persona.reset();
      alert("Usuario creado con éxito!")
    }
  }

  //valido la edad:
  validarEdad18(fecha_nacimiento: string){
    var edad = 0;
    if(fecha_nacimiento){
      const fecha_date = new Date(fecha_nacimiento);
      const timeDiff = Math.abs(Date.now() - fecha_date.getTime());
      edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
    if(edad>=18){
      return true;
    }else{
      return false;
    }
  }
}
