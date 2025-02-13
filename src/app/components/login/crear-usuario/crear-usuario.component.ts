// crear-usuario.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  email: string = '';
  contrasena: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  
  @Output() cerrar = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  enviarData(): void {
    const usuario = { email: this.email, contrasena: this.contrasena };
    this.http.post('http://localhost:3000/login', usuario).subscribe(
      response => {
        this.successMessage = 'Usuario creado con éxito';
        this.errorMessage = '';
        setTimeout(() => this.cerrar.emit(), 2000);
      },
      error => {
        this.successMessage = '';
        this.errorMessage = 'Error al crear usuario';
      }
    );
  }
  
  cerrarModal(): void {
    this.cerrar.emit();
  }
}