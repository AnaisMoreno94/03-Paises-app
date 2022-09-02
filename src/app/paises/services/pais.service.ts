import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  private apifilter:string= '?fields=name,capital,flags,population,cca2';

  constructor( private http: HttpClient) { }


  buscarPais(termino:string):Observable<Country[]>{

    const url= `${this.apiUrl}/name/${termino}${this.apifilter}`

    return this.http.get<Country[]>(url)

  }


  buscarCapital(termino:string):Observable<Country[]>{

    const url=`${this.apiUrl}/capital/${termino}${this.apifilter}`

    return this.http.get<Country[]>(url)

  }


  GetPais(id:string):Observable<Country[]>{

    const url=`${this.apiUrl}/alpha/${id}`

    return this.http.get<Country[]>(url);

  }

  buscarRegion(region:string):Observable<Country[]>{

    const url =`${this.apiUrl}/region/${region}${this.apifilter}`
    
    return this.http.get<Country[]>(url)

  }
}
// El realiza el nuevo url por medio de HttpParams()
//genera el metodo get httpParams(){
// return new HttpParams.set('fields', 'name,capital,flags,population,cca2')}

//en el retorno de cada solicitud a la api al lado del url incluye (url, {params:this.httpParams}) ... me parecio excesivo asi que solo lo deje como una constante y ya (apifilter)