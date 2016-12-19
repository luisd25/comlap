import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  public currentUser:any[] = [];
  public userName:string = '';
  public name:string = '';
  public lastName:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {}

  public currentUserDetail(){
    if(this.navParams.get('user')){

      this.currentUser = this.navParams.get('user');
      // this.showAlert(this.items[0].username,'');

    }
    else{
      this.userName = 'Luisd25';
      this.name = 'Luis';
      this.lastName = 'Dominguez';
    }
  }
  
  ngOnInit() {
        this.currentUserDetail();
        // this.username = 'Luis Dominguez';
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
