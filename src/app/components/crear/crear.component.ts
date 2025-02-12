import { Component, Input } from '@angular/core';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  @Input()
  modulo: String=''
   @Input()
  valor1: String=''
   @Input()
   valor2: String=''


   valor1Txt: String=''
   valor2Txt: String =''

  enviarData(): void {
    //console.log( localStorage.getItem("moduloActual"))
    console.log("aaaaSADADASASDASDASDASDa")



    // if ( localStorage.getItem("moduloActual")=="Usuario"){
    //   //Ejecutar service de usuario para insertar
    //   const dataAEnviar = { valor1: this.valor1, valor2: this.valor2 };
    // }
  
  

  }
}
