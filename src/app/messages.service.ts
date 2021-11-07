import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  
  mensajes: string[] = [];

  constructor() { 
    var tiempo = this.obtenerTiempo();
    this.mensajes.push(`${tiempo} // Bienvenido a ingresado al catalogo de autos.`);
  }
  
  add(mensaje:string){
    var tiempo = this.obtenerTiempo();
    this.mensajes.push(`${tiempo} // ${mensaje}`)
  }

  clear(){
    this.mensajes = []
  }

  obtenerTiempo(){
    var hoy = new Date();
    var horas, minutos, segundos;
    if(hoy.getHours().toString().length < 10){
      horas = "0" + hoy.getHours();
    }else{
      horas = hoy.getHours().toString();
    }
    if(hoy.getMinutes().toString().length < 1){
      minutos = "0" + hoy.getMinutes();
    }else{
      minutos = hoy.getMinutes().toString();
    }
    if(hoy.getSeconds().toString().length == 1){
      segundos = "0" + hoy.getSeconds();
    }else{
      segundos = hoy.getSeconds().toString();
    }
    return horas + ":" + minutos + ":" + segundos;
  }

}
