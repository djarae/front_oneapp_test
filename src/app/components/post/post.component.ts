import { Component } from '@angular/core';
import {Post} from '../../../model/post'
import { getPosts,putPost } from "../../../services/post"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  Posts = new Array<Post>; 
  async ngOnInit() {
    this.Posts=await getPosts();
  }

  cerrarSesion(){
   localStorage.removeItem('user');
   location.reload();
  }

  
  crearPost(){
     alert("c post")
      putPost();
    }

}
