import { Component } from '@angular/core';
import {CrearComponent} from '../components/crear/crear.component';
import { MatDialog } from '@angular/material/dialog';
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
    var moduloActual = localStorage.setItem("moduloActual",);
  }
  cerrarModal(): void {
    this.mostrarModal = false;
  }
  login(): void {
    alert("Loggeado con exito");
    localStorage.setItem('user', 'isLoggedIn');
  }

}
