import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map'
import { ListhospitalPage } from '../listhospital/listhospital'

/*
  Generated class for the Hospital tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html'
})
export class HospitalPage {

  tab1Root: any = MapPage;
  tab2Root: any = ListhospitalPage;

  constructor(public navCtrl: NavController) {

  }

}