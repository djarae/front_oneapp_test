import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../../../../services/comentario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
volverALista() {
throw new Error('Method not implemented.');
}
  postId!: number;
  comentarios: any[] = [];
post: any;
nuevoComentario: any;

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

  agregarComentario() {
    const nuevoComentario2 = { idPost: this.postId };
    this.comentarioService.crearComentario(nuevoComentario2).subscribe(() => {
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
