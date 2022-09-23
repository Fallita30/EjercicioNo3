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
    //Se llama a la solicitud de la lista para cargar los datos haci el html
    this.cargarData();

    //Se llama a la solicitud del boton enviar mensaje para cargar la información de cada componente de la card
    this.serviMostraDato.mostrarDatos.subscribe( data =>{
      this.listImage.push(data);
    })
  }

  //Esta función de la APi trae la información para mostrar en el componete hijo 
  public cargarData(){
    this.restService.get("http://localhost:3000/images")
    .subscribe(respuesta => {
      this.listaImagenes = respuesta
    })
  }

}
