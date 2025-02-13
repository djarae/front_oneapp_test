import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import {loginService} from '../../../services/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mostrarModal: boolean = false;
  emailLogin: any;
  contrasenaLogin: any;


  abrirModal(): void {
    this.mostrarModal = true;
    console.log("abre modal");

  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  async login() {
  // let data = {"email":"carlos.mendez@example.com" , "contrasena":"password1" }
  let data = {"email":this.emailLogin , "contrasena":this.contrasenaLogin }
  let responseFinal : any;
await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Authorization: "CrocodileZebraGiraffe",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(response=>{
   alert(JSON.stringify(response))
    localStorage.setItem('user', 'isLoggedIn');
    location.reload();
    alert( "Loggeado con exito")

    }).catch(err => {
        alert("Error: usuario o conteraseña ")
    });
  }



}


