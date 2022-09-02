import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
       cursor:pointer;
}
li:hover{
  background-color: #2751f552;
}
`]
})


export class PorPaisComponent {

  termino:string = '';
  hayError:boolean = false;
  paises :Country[] = [];

  paisesSugeridos:Country[]=[];
 
  constructor( private paisService: PaisService) { }
  

  //Funcion para buscar el pais  recibiendo la informacion del metodo buscar() 
  
  buscarPais(termino:string){
    this.hayError= false; 
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (paises)=>{
        this.paises = paises;
        this.paisesSugeridos=[];
    },
    (err)=>{
      this.hayError = true;
      this.paises = [];
    }
    )


  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino= termino;

    this.paisService.buscarPais(termino)
    .subscribe(
      paises=>this.paisesSugeridos = paises.splice(0,4),
      (err)=> this.paisesSugeridos=[]

    )
  }

}
