import { Component, OnInit, Output } from '@angular/core';
import { MostrarDatosService } from '../servicios/mostrar-datos.service';
import { RestService } from '../servicios/rest.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  public listaImagenes:any = []
  constructor(private restService:RestService, private serviMostraDato:MostrarDatosService) { }

  public listImage:Array<any>=[]

  ngOnInit(): void {
    this.cargarData();
    this.serviMostraDato.mostrarDatos.subscribe( data =>{
      this.listImage.push(data);
    })
  }

  public cargarData(){
    this.restService.get("http://localhost:3000/images")
    .subscribe(respuesta => {
      this.listaImagenes = respuesta
    })
  }

}
