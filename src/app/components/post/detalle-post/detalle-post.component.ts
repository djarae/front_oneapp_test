import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../../../model/comentario';
import { getComentarios } from '../../../services/comentario';
import { Post } from '../../../model/post';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {
  @Input() post!: Post;
  comentarios: Comentario[] = [];

  async ngOnInit() {
    if (this.post) {
      this.comentarios = await getComentarios(this.post.Id);
    }
  }
}