import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:3000/comentarios';

  constructor(private http: HttpClient) {}

  getComentariosPorPost(idPost: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/post/${idPost}`);
  }

  crearComentario(comentario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, comentario);
  }

  editarComentario(comentario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${comentario.id}`, comentario);
  }

  eliminarComentario(idComentario: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${idComentario}`);
  }
}