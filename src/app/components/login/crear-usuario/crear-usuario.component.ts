import { Component } from '@angular/core';


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
  
  async enviarData(): Promise<void> {
    const usuario = { "email": this.email, "contrasena": this.contrasena };
    const url = 'http://localhost:3000/crearUsuario'; // Asegúrate de que la URL sea la correcta
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
  
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  
    
  }
  


}