import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle.component';
//Material Angular
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 



@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatCardModule
   
  ]
})
export class DetalleModule { }
