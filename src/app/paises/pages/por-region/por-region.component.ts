import { Component} from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
  
  button{
    margin-right: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }  `
    
  ]
})
export class PorRegionComponent {

  regiones:string[] = ['africa', 'america', 'asia', 'europe', 'oceania']
  regionActiva:string= '';

  paises:Country[] =[]


  constructor(private paisService:PaisService) { }


  getClass(region:string):string{
     return (region===this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary';

  }



  activarRegion(region:string){

    if(this.regionActiva=== region){return}
    //El if para que no cargue nuevamente los paises si seleccionan la misma region

    this.regionActiva= region;
    this.paises=[];

    this.paisService.buscarRegion(region).subscribe(
      (paises=>{
        this.paises = paises;

      })
    )

    

    //TODO llamada al servicio
  }

}
