import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NewAppointmentPage} from '../new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../list-of-appointment/list-of-appointment';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  public currentUser:any;
  public userName:string = '';
  public name:string = '';
  public Lastname:string = '';
  newappointment = NewAppointmentPage;
  listappointment= ListOfAppointmentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {}

  public currentUserDetail(){
    if(this.navParams.get('user')){

      this.currentUser = this.navParams.get('user');
      
      this.userName = this.currentUser.username;
      this.name = this.currentUser.name;
      this.Lastname = this.currentUser.Lastname;
    }
    else{
      this.userName = 'Luisd25';
      this.name = 'Luis';
      this.Lastname = 'Dominguez';
    }
  }
  
    ngOnInit() {
        this.currentUserDetail();    
    }
    newAppointment(){
      this.navCtrl.push(this.newappointment,{userid:this.currentUser.userid});
      // this.navCtrl.push(this.newappointment,{userid:'65'});

    }
    listOfAppointment(){
      this.navCtrl.push(this.listappointment,{userid:this.currentUser.userid});
      // this.navCtrl.push(this.listappointment,{userid:'65'});
    }

  showAlert(titlep:string,subTitlep:string) {
    let alert = this.alertCtrl.create({
      title: titlep,
      subTitle: subTitlep,
      buttons: ['OK']
    });
    alert.present();
  }

}
