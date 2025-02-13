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
  enviarData(): void {
    const usuario = { email: this.email, contrasena: this.contrasena };
    // this.usuarioService.crearUsuario(usuario).subscribe(
    //   (response: boolean) => {
    //     if (response) {
    //       this.successMessage = 'Usuario creado con éxito';
    //       this.errorMessage = '';
    //     } else {
    //       this.errorMessage = 'Error al crear el usuario';
    //       this.successMessage = '';
    //     }
    //   },
    //   error => {
    //     this.errorMessage = 'Hubo un error al conectar con el servidor';
    //     this.successMessage = '';
    //   }
    // );
  }
  


}