import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Material Angular
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 

//Sons Components:
import { LoginComponent} from './components/login/login.component'
import { PostComponent} from './components/post/post.component'

import { CrearUsuarioComponent} from './components/login/crear-usuario/crear-usuario.component'
import { CrearPostComponent} from './components/post/crear-post/crear-post.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearUsuarioComponent,
    PostComponent,
    CrearPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatCardModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
