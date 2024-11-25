import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonList, IonCardTitle, IonItem, IonCardContent, IonInput, IonText, IonButton, IonLabel, IonIcon, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PublicacionService } from 'src/app/servicio/publicacion.service';
import { Publicacion } from 'src/app/modelo/publicacion';

@Component({
  selector: 'app-publicacion-form',
  templateUrl: './publicacion-form.component.html',
  styleUrls: ['./publicacion-form.component.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, FormsModule, CommonModule, IonButton, IonText, IonInput, IonCardContent, IonItem, IonCardTitle, IonCard,IonCardHeader,IonList]
})
export class PublicacionFormComponent  implements OnInit {
  titulo : string=""
  descripcion : string=""
  foto:string=""
  // publicacionv2: Publicacion=(titulo:'',imagen:'',descripcion:'',fecha: '')


  constructor(private _publicacionService: PublicacionService) { addIcons({cameraOutline});}

  ngOnInit() {}

  async guardarFormulario(){
    const publicacion: Publicacion ={
      titulo: this.titulo,
      imagen: this.foto,
      descripcion: this.descripcion,
      fecha: new Date()
    }
    console.log("enviando objeto a guardar" +publicacion.imagen)
    await this._publicacionService.crearPublicacion(publicacion)
    this.limpiarFormulario()
   
  }
  async takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64
  });
  //se setea base64 la imagen recibida, con una llamada segura que de recibir algo extraño lo seteará vacio
  this.foto =image.base64String??''
  }

  limpiarFormulario(){
    this.titulo =''
    this.descripcion=''
    this.foto=''
  }
}
