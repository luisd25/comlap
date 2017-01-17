import {Component} from '@angular/core';
import { NavController, Nav , Tabs } from 'ionic-angular';


@Component({
  templateUrl: 'home.html',
  selector: 'page-home'
})
export class HomePage {
    slides = [
    {
      title: "Bienvenido a COMLAP",
      description: "La <b>Consulting Online Machine Learning Analytics Prediction</b>. Aplicación",
      image: "img/welcome2.png",
    },
    {
      title: "Nuestra Mision?",
      description: "Eficientizar el proceso de visita al médica, reducir  los tiempo de espera en cita y notificar al cliente de los resultados.",
      image: "img/mision3.png",
    },
    {
      title: "Nuestros Vision?",
      description: "Mantener operando nuestro modelo de negocios a nivel mundial, cumpliendo con los estándares de calidad establecida y cumpliendo las leyes regulatorias dentro del marco en que se encuentra.",
      image: "img/vision2.png",
    },
    {
      title: "Nuestros Valores?",
      description: "Somos un grupo de personas que quieren hacer un cambio en el mundo de la medicina debido a la falta de atención rápida que muchos reciben, creando entonces nuestra plataforma de COMLAP para cubrir todas esas necesidades.",
      image: "img/valores2.png",
    }
  ];
  tab:Tabs;
      constructor(public navCtrl: NavController){
         this.tab = this.navCtrl.parent;
      }

      goToLogin(){
        this.tab.select(1)
      } 
            

}
