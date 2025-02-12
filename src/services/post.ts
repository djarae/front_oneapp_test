import {Post} from '../model/post'
export async function getPosts() { 
    var Posts = new Array<Post>; 
    const response = await fetch('http://localhost:3000/getPosts');
    Posts=await response.json();
        return  Posts
 }