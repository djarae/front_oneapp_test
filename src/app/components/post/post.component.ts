// post.component.ts
import { Component } from '@angular/core';
import { Post } from '../../../model/post';
import { getPosts, postPost, putPost, deletePost } from '../../../services/post.service';
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

  postIdSeleccionado: number = 0;

  pagina : number =1;
  async ngOnInit() {
    this.Posts = await getPosts(this.pagina);
    
  }


  async paginaModif(idModif:number){
    //1 = resta; 2=suma
    if (idModif==1){
      if (this.pagina>1){
        this.pagina=this.pagina-1
      }
    }
    if (idModif==2){
      //debo obtener el total de posts en bd con un select count y validar que no se pase 
        this.pagina=this.pagina+1
    }
    this.Posts = await getPosts(this.pagina);
  }
  
  verDetalle(postId: number) {
  
    this.mostrarModalDetalle = true;
    let txtPostId = postId.toString();
    localStorage.setItem("IdDetalleActivo",txtPostId)

    let perseador : any="";
    perseador = localStorage.getItem("IdDetalleActivo");
    this.postIdSeleccionado=parseInt(perseador); 
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