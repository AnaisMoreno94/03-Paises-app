import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

 country!: Country;
 name:string = ''


  constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {

//Utilizando operadores de rxjs

    // this.activatedRoute.params
    // .pipe(
    //   switchMap(({id})=> this.paisService.GetPais(id))
    // )
    // .subscribe(pais =>{
    //   this.country=pais[0]
    //   console.log(this.country)
    // })
//recordar que la respuesta llega como un arreglo con un objeto del pais dentro


    this.activatedRoute.params
    .subscribe((param)=>{
         
        this.paisService.GetPais(param['id'])
         .subscribe(pais=>{
           
           this.country = pais[0]
      })
    })

  }

}
