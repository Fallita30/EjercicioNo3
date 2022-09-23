import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarDatosService {

  @Output() mostrarDatos: EventEmitter<any> = new EventEmitter();
  constructor() { }

  
}
