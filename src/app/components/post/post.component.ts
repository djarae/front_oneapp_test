import { Component } from '@angular/core';
import {Post} from '../../../model/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  Posts = new Array<Post>; 
  async ngOnInit() {
    const response = await fetch('http://localhost:3000/getPosts');
    this.Posts=await response.json();
  }
}
