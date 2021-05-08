import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }
  getData(url: string){
    /* Esto es un obserbale,que es una funcion asincrova diferencia con la promesa,
    es que las promesas no se puede cancelar y el observable se queda vivo. 
    */
    return this.http.get(url) 
   }

}
