import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../providers/locations';
import { CasesPage } from '../cases/cases'

/*
  Generated class for the Listhospital page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listhospital',
  templateUrl: 'listhospital.html'
})
export class ListhospitalPage {

  public patientid:number;
  newCases = CasesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public locations: Locations) {
    // console.log("Passed params",navParams.data );
    this.patientid = navParams.data;
  }

  ionViewDidLoad() {
    
  }

  newCase(hospitalid:number){
      this.navCtrl.push(this.newCases,{patientid:this.patientid,hospitalid:hospitalid});
      // this.navCtrl.push(this.newappointment,{userid:'65'});
      // console.log('el id del hospital es:',hospitalid);
    }
}
