import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Hace peticiones a servidores rest, externos
import { InfoPagina } from '../interfaces/info-pagina.interface' ;

@Injectable({     
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina = {};
cargada = false;

equipo: any[] = [];

  constructor( private http: HttpClient) { 
  	this.cargarInfo();
  	this.cargarEquipo();
 
}

private cargarInfo(){
	 	this.http.get('assets/data/data-pagina.json')
	.subscribe( (resp: InfoPagina )=> {

		this.cargada = true;
		this.info = resp;
	});
}
private cargarEquipo(){
	this.http.get('https://angular-html-26860.firebaseio.com/equipo.json') //datos traidos de la base de datos Firebase|
	.subscribe( (resp: any[])  => {

		this.equipo = resp;
		console.log(resp);
	});

}


}



  

