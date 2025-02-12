import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { CrearPostComponent } from './crear-post/crear-post.component';
import { DetallePostComponent } from './detalle-post/detalle-post.component';



@NgModule({
  declarations: [
    PostComponent,
    CrearPostComponent,
    DetallePostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
