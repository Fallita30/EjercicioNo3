import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //Por medio de este servicio se hace llamado de los datos desde la Api
  constructor(private http: HttpClient) { }
  public get(url:string){
    return this.http.get(url);  //GET jala datos de una api

  }

}
