import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    
    MatIconModule,
    MatDialogModule

  ]
})
export class LoginModule { }
