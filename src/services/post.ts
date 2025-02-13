import {Post} from '../model/post'
export async function getPosts() { 
    var Posts = new Array<Post>; 
    const response = await fetch('http://localhost:3000/getPosts');
    Posts=await response.json();
        return  Posts
 }
 export async function postPost() { 
    let data = {"titulo":"Pokemon la lleva2" , "Contenido":"Pokemon es un juegazo que bla bla bla" }
    

    fetch("http://localhost:3000/postPost", {
        
        method: "POST",
        headers: {
          Authorization: "CrocodileZebraGiraffe",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(response=>{
        console.log('Success: ', response);
        //if you want to access this response later, you have to assign it to some variable
      }).catch(err => {
        console.log('Error: ', err)
      });

    return 0;
 }