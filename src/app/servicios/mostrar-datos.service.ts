import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarDatosService {

    //Este servicio cumple con la función de mostrar los datos solicitados según requerimiento que se haga por medio del @Output

  @Output() mostrarDatos: EventEmitter<any> = new EventEmitter();
  constructor() { }

  
}
