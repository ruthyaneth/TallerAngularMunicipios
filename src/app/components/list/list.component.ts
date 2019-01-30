import { Component, OnInit } from '@angular/core';
import {MunicipiosService} from "../../services/municipios.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';
  msp:MunicipiosService;
  	
  constructor(private ms:MunicipiosService) { 
  this.msp = ms;
  }

  ngOnInit() {
  }
  
  capturar() {

    this.verSeleccion = this.opcionSeleccionado.toUpperCase();
    this.msp.buscar(this.verSeleccion);
  }
}
