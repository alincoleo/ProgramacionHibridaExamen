import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel, IonNote, IonButton, IonIcon, IonImg } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { Publicacion } from 'src/app/modelo/publicacion';
import { PublicacionService } from 'src/app/servicio/publicacion.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.scss'],
  standalone: true,
  imports: [ FormsModule, CommonModule, IonList, IonItem, IonLabel, IonNote, IonButton, IonIcon, IonImg, ]
})
export class PublicacionListComponent  implements OnInit {

  publicaciones:Publicacion[]=[]

  constructor(private _publicacionService: PublicacionService) {addIcons({trashOutline}); }

  ngOnInit() {
   this.refrescarListado()
  }

  async refrescarListado(){
    console.log("ingresando a refrescar listado")
    this.publicaciones = await this._publicacionService.cargarPublicaciones()
    console.log("refrescarListado")
  }

  async onDelete(publicacion: Publicacion) {
    await this._publicacionService.eliminarPublicacion(publicacion)
    this.refrescarListado
    }



}
