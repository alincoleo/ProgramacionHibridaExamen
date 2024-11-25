import { Injectable } from '@angular/core';
import { Publicacion } from '../modelo/publicacion';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  key:string ="publicaciones"
  publicaciones: Publicacion[]=[]

  constructor() { }

  async crearPublicacion(publicacion:Publicacion){
    console.log("se recibio objeto "+publicacion.descripcion)
    this.publicaciones.push(publicacion)
    console.log("se agrego a la lista")
    await this.guardar()
    console.log("nueva lista")
  }

  async guardar(){
    await Preferences.set({
      key: this.key,
      value:JSON.stringify(this.publicaciones)
    })
  }

  async cargarPublicaciones():Promise<Publicacion[]>{
    const publicacionesStr = await Preferences.get({key: this.key})
    this.publicaciones = JSON.parse(publicacionesStr.value??'')
    return this.publicaciones
  }

  async eliminarPublicacion(publicacion:Publicacion){
    const indice = this.publicaciones.findIndex(
      publicacionActual=>
        publicacionActual.titulo === publicacion.titulo &&
        publicacionActual.descripcion === publicacion.descripcion &&
        publicacionActual.imagen === publicacion.imagen
    )
    this.publicaciones.splice(indice,1)
    await this. guardar()
  }
}
