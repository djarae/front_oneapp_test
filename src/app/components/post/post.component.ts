// post.component.ts
import { Component } from '@angular/core';
import { Post } from '../../../model/post';
import { getPosts, postPost, putPost, deletePost } from '../../../services/post';
import {DetalleComponent} from './detalle/detalle.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private router: Router) {}
  Posts: Post[] = [];
  mostrarModal: boolean = false;
  mostrarModalDetalle: boolean = false;

  editandoPost: Post | null = null;
  titulo: string = '';
  contenido: string = '';

  posts: Post[] = [];
  postSeleccionado?: Post;

  async ngOnInit() {
    this.Posts = await getPosts();
    
  }



  
  verDetalle(postId: number) {
    // this.router.navigate(['/detalle', postId]);
    this.mostrarModalDetalle = true;
    console.log("abre modal");
  }


  cerrarSesion() {
    localStorage.removeItem('user');
    location.reload();
  }

  abrirModal(post?: Post): void {
    this.mostrarModal = true;
    if (post) {
      this.editandoPost = post;
      this.titulo = post.Titulo;
      this.contenido = post.Contenido;
    } else {
      this.editandoPost = null;
      this.titulo = '';
      this.contenido = '';
    }
  }

  

  enviarDatos() {
    if (this.editandoPost) {
      putPost(this.editandoPost.Id, this.titulo, this.contenido).then(() => {
        this.editandoPost!.Titulo = this.titulo;
        this.editandoPost!.Contenido = this.contenido;
        this.mostrarModal = false;
      });
    } else {
      postPost(this.titulo, this.contenido).then(() => {
        this.mostrarModal = false;
        location.reload();
      });
    }
  }

  eliminarPost(id: number) {
    if (confirm('¿Seguro que deseas eliminar este post?')) {
      deletePost(id).then(() => {
        this.Posts = this.Posts.filter(post => post.Id !== id);
      });
    }
  }
}