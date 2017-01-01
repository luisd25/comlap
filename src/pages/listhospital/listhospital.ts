import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../providers/locations';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public locations: Locations) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListhospitalPage');
  }

}
