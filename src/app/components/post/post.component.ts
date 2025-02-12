import { Component } from '@angular/core';
import {Post} from '../../../model/post'
import { getPosts } from "../../../services/post"

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
  // let isLoggedIn: boolean = false;
   console.log("se cierra sesion")
 
   console.log(  localStorage.getItem('user'))
   localStorage.removeItem('user');
   location.reload();
  }

}
