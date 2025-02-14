import {Post} from '../model/post'


export async function getPosts(idPagina:number) { 
    var Posts = new Array<Post>;
    
    
  //  const response = await fetch('http://localhost:3000/getPosts');

//se que deberia usar get ,pero por tiempo lo usare, par luego ver como era implementar los aprametros
    let data = { "idPagina":idPagina}
    const response = await fetch("http://localhost:3000/getPosts", {
      method: "POST",
      headers: {
        Authorization: "CrocodileZebraGiraffe",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })


    Posts=await response.json();
        return  Posts
 }


 export async function postPost(titulo:String, contenido: String) { 
    let data = {"titulo":titulo, "Contenido":contenido}
    fetch("http://localhost:3000/postPost", {
        method: "POST",
        headers: {
          Authorization: "CrocodileZebraGiraffe",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(response=>{
        console.log('Success: ', response);
      }).catch(err => {
        console.log('Error: ', err)
      });
    return 0;
 }






export async function putPost(id: number, titulo: string, contenido: string) {
  const data = { titulo, contenido };
  return fetch(`http://localhost:3000/putPost/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

export async function deletePost(id: number) {
  return fetch(`http://localhost:3000/deletePost/${id}`, {
    method: 'DELETE'
  });
}