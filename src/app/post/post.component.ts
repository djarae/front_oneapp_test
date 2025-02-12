import { Component } from '@angular/core';
import {Post} from '../../model/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  Posts = new Array<Post>; 
  async ngOnInit() {
    const response = await fetch('http://localhost:3000/getPosts');
    alert("valor response");
   console.log("aaaaanbbb")
    alert(response);

    this.Posts=await response.json();
  }
}
