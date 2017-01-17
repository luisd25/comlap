import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
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
  patientid:number;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
  }

   currentPatientId(){

      if(this.navParams.get('patientid')){
        this.patientid = this.navParams.get('patientid');
        
      }
      else{
      }
      
      if(this.navParams.get('user')){
        this.user = this.navParams.get('user');
        
      }
  }

  ngOnInit() {
      this.currentPatientId();    
    }

}