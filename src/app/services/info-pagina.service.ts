import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Hace peticiones a servidores rest, externos
import { InfoPagina } from '../interfaces/info-pagina.interface' ;

@Injectable({     
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina = {};
cargada = false;

  constructor( private http: HttpClient) { 
  	this.http.get('assets/data/data-pagina.json')
	.subscribe( (resp: InfoPagina )=> {

		this.cargada = true;
		this.info = resp;
		console.log(resp);
	});
}
}
/*console.log('Servicio de página listo');*/

//Leer el archivo JSON



  

