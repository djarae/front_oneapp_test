import { Component } from '@angular/core';
import {Post} from '../../../../model/post'
import { getPosts,postPost } from "../../../../services/post.service"
@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent {
  titulo: string = '';
  contenido: string = '';
  enviarDatos(): void {
    console.log("entro");
    postPost( this.titulo,this.contenido)
  }
}
