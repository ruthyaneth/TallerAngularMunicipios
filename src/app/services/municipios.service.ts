import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor( private http:HttpClient) {
  	this.cargarMunicipios();  
   }

   municipios:any=[];
   filtro1:any =[];
   prueba:string='';
   consultaSiPregunta1:string;
   consultaNoPregunta1:string;
   consultaValidosPregunta1:string;
   consultaNulosPregunta1:string;
   consultaNoMarcadosPregunta1:string;

   consultaSiPregunta2:string;
   consultaNoPregunta2:string;
   consultaValidosPregunta2:string;
   consultaNulosPregunta2:string;
   consultaNoMarcadosPregunta2:string;

   consultaSiPregunta3:string;
   consultaNoPregunta3:string;
   consultaValidosPregunta3:string;
   consultaNulosPregunta3:string;
   consultaNoMarcadosPregunta3:string;

   consultaSiPregunta4:string;
   consultaNoPregunta4:string;
   consultaValidosPregunta4:string;
   consultaNulosPregunta4:string;
   consultaNoMarcadosPregunta4:string;

   consultaSiPregunta5:string;
   consultaNoPregunta5:string;
   consultaValidosPregunta5:string;
   consultaNulosPregunta5:string;
   consultaNoMarcadosPregunta5:string;

   consultaSiPregunta6:string;
   consultaNoPregunta6:string;
   consultaValidosPregunta6:string;
   consultaNulosPregunta6:string;
   consultaNoMarcadosPregunta6:string;

   consultaSiPregunta7:string;
   consultaNoPregunta7:string;
   consultaValidosPregunta7:string;
   consultaNulosPregunta7:string;
   consultaNoMarcadosPregunta7:string;
   
  
   cargarMunicipios(){
   
   	this.http.get("assets/data/municipios.json").subscribe(respuesta=>{
   	this.municipios=respuesta;
    
   	console.log(this.municipios);
   	})
   	}

    buscar(nombre){
    
    this.filtro1 = this.municipios.find(function (v){ 
    return  v.municipio==nombre;
    });
    this.consultaSiPregunta1 = this.filtro1.votacion[0].vot[0].vga;
    this.consultaNoPregunta1 = this.filtro1.votacion[0].vot[1].vga;
    this.consultaValidosPregunta1 = this.filtro1.votacion[0].gen.vva;
    this.consultaNulosPregunta1 = this.filtro1.votacion[0].gen.vnu;
    this.consultaNoMarcadosPregunta1 = this.filtro1.votacion[0].gen.tnm;

    this.consultaSiPregunta2 = this.filtro1.votacion[1].vot[0].vga;
    this.consultaNoPregunta2 = this.filtro1.votacion[1].vot[1].vga;
    this.consultaValidosPregunta2 = this.filtro1.votacion[1].gen.vva;
    this.consultaNulosPregunta2 = this.filtro1.votacion[1].gen.vnu;
    this.consultaNoMarcadosPregunta2 = this.filtro1.votacion[1].gen.tnm;

    this.consultaSiPregunta3 = this.filtro1.votacion[2].vot[0].vga;
    this.consultaNoPregunta3 = this.filtro1.votacion[2].vot[1].vga;
    this.consultaValidosPregunta3 = this.filtro1.votacion[2].gen.vva;
    this.consultaNulosPregunta3 = this.filtro1.votacion[2].gen.vnu;
    this.consultaNoMarcadosPregunta3 = this.filtro1.votacion[2].gen.tnm;

    this.consultaSiPregunta4 = this.filtro1.votacion[3].vot[0].vga;
    this.consultaNoPregunta4 = this.filtro1.votacion[3].vot[1].vga;
    this.consultaValidosPregunta4 = this.filtro1.votacion[3].gen.vva;
    this.consultaNulosPregunta4 = this.filtro1.votacion[3].gen.vnu;
    this.consultaNoMarcadosPregunta4 = this.filtro1.votacion[3].gen.tnm;

    this.consultaSiPregunta5 = this.filtro1.votacion[4].vot[0].vga;
    this.consultaNoPregunta5 = this.filtro1.votacion[4].vot[1].vga;
    this.consultaValidosPregunta5 = this.filtro1.votacion[4].gen.vva;
    this.consultaNulosPregunta5 = this.filtro1.votacion[4].gen.vnu;
    this.consultaNoMarcadosPregunta5 = this.filtro1.votacion[4].gen.tnm;

    this.consultaSiPregunta6 = this.filtro1.votacion[5].vot[0].vga;
    this.consultaNoPregunta6 = this.filtro1.votacion[5].vot[1].vga;
    this.consultaValidosPregunta6 = this.filtro1.votacion[5].gen.vva;
    this.consultaNulosPregunta6 = this.filtro1.votacion[5].gen.vnu;
    this.consultaNoMarcadosPregunta6 = this.filtro1.votacion[5].gen.tnm;

    this.consultaSiPregunta7 = this.filtro1.votacion[6].vot[0].vga;
    this.consultaNoPregunta7 = this.filtro1.votacion[6].vot[1].vga;
    this.consultaValidosPregunta7 = this.filtro1.votacion[6].gen.vva;
    this.consultaNulosPregunta7 = this.filtro1.votacion[6].gen.vnu;
    this.consultaNoMarcadosPregunta7 = this.filtro1.votacion[6].gen.tnm;
    }
}