import {Usuario} from '../model/usuario'
export async function loginService(usuario : String, contraseña: String) { 
    console.log("entro al service usuario login");
    var responsefinal:any;
    let data = {"email":{usuario} , "contraseña":{contraseña}}
    fetch("http://localhost:3000/login", {
        method: "GET",
        headers: {
          Authorization: "CrocodileZebraGiraffe",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(response=>{
        console.log('Success: ', response);
        responsefinal=response
      }).catch(err => {
        console.log('Error: ', err)
      });
        return   responsefinal.json();
 }
