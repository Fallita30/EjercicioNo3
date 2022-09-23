import { Component, Input, OnInit } from '@angular/core';
import { MostrarDatosService } from 'src/app/servicios/mostrar-datos.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()hijo: any;
  @Input()dataEntrante: any;
  
  constructor(private servicioMostrarDato: MostrarDatosService) { }

  ngOnInit(): void {
  }

  disparador(){
    this.servicioMostrarDato.mostrarDatos.emit({
      data:this.dataEntrante
    });
  }

}
