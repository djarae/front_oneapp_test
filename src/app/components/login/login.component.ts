import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mostrarModal: boolean = false;



  abrirModal(): void {
    this.mostrarModal = true;
    console.log("abre modal");

  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  login(): void {
    alert("Loggeado con exito");
    localStorage.setItem('user', 'isLoggedIn');
  }



}
