import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonBackButton, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, createOutline } from 'ionicons/icons';
import { PublicacionFormComponent } from "../../componentes/publicacion-form/publicacion-form.component";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [RouterModule, IonButtons, IonButton, IonBackButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PublicacionFormComponent]
})
export class FormularioPage implements OnInit {

  constructor() {addIcons({homeOutline,createOutline}); }

  ngOnInit() {
  }

}
