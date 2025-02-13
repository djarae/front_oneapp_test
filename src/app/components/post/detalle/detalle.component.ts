import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../../../../services/comentario.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  postId!: number;
  comentarios: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private comentarioService: ComentarioService
  ) {}

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this.comentarios = [];
    this.comentarioService.getComentariosPorPost(this.postId).subscribe(data => {
      this.comentarios = data;
    });
  }

  agregarComentario(contenido: string) {
    const nuevoComentario = { idPost: this.postId, contenido };
    this.comentarioService.crearComentario(nuevoComentario).subscribe(() => {
      this.obtenerComentarios();
    });
  }

  editarComentario(comentario: any) {
    this.comentarioService.editarComentario(comentario).subscribe(() => {
      this.obtenerComentarios();
    });
  }

  eliminarComentario(idComentario: number) {
    if (confirm('¿Estás seguro de eliminar este comentario?')) {
      this.comentarioService.eliminarComentario(idComentario).subscribe(() => {
        this.obtenerComentarios();
      });
    }
  }
}
