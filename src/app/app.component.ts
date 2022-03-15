import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:object[];

  constructor(){
    this.entradas=[ //entradas de blog, por ejemplo
      {titulo:"Python cada dia mas presente"},
      {titulo:"Java presente mas de 10 años"},
      {titulo:"Javascript para web"},
      {titulo:"Kotlin cada dia mas funcional"},
      {titulo:"¿Donde quedó Pascal?"}
    ]
  }


  registrarUsuario(){
    this.registrado=true;
    this.mensaje="usuario registrado con exito";
  }
}
