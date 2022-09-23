import { Component, Input, OnInit } from '@angular/core';
import { MostrarDatosService } from 'src/app/servicios/mostrar-datos.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  // Se crean Inputs para declarar la variable de los datos que bienen de Api
  @Input()hijo: any;
  @Input()dataEntrante: any;
  
  constructor(private servicioMostrarDato: MostrarDatosService) { }

  ngOnInit(): void {
  }

  //Esta función permite que se muestre el título de los componentes de la Api y se muestren en el componente padre. 
  disparador(){
    this.servicioMostrarDato.mostrarDatos.emit({
      data:this.dataEntrante
    });
  }

}
