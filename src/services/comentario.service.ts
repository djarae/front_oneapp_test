import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';  
import { Comentario} from 'src/model/comentario';
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:3000/comentarios';










  // getComentariosPorPost(idPost: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/post/${idPost}`);
  // }


  // crearComentario(comentario: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, comentario);
  // }

  // editarComentario(comentario: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${comentario.id}`, comentario);
  // }

  // eliminarComentario(idComentario: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${idComentario}`);
  // }
}



export async function getComentarios(idPost: number) { 
    var Comentarios = new Array<Comentario>; 
    // const response = await fetch('http://localhost:3000/comentarios/:'+idPost);
    // Comentarios=await response.json();
    let data = {
      "idPost":idPost
  }
    const response = await fetch("http://localhost:3000/comentarios/getComentario", {
      method: "POST",
      headers: {
        Authorization: "CrocodileZebraGiraffe",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    console.log("response")
    console.log(response)
    Comentarios=await response.json();
 return  Comentarios
 }