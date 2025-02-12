import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.checkLoginStatus();
    console.log(localStorage.getItem('user'));
  }

  // Verifica si el usuario está logueado en el localStorage
  checkLoginStatus(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
   
  }

  // Función para simular login (para pruebas)
  login(): void {
    localStorage.setItem('user', 'loggedIn');
    location.reload();
    this.checkLoginStatus();
  }

  // Función para cerrar sesión (para pruebas)
  logout(): void {
    localStorage.removeItem('user');
    this.checkLoginStatus();
  }
}
