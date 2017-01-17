import {Component} from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
// import {bootstrap} from '@angular/platform-browser-dynamic';
//To do : limit imports
import 'rxjs/Rx'
import {ComlapService} from '../../providers/comlap.service'


@Component({
    templateUrl: 'login.html',
    selector: 'page-login',
    // entryComponents:[ ProfilePage ]
})
export class LoginPage {

    username:string = '';
    password:string = '';
    auth_type:string = "N/A";
    is_auth_error:boolean = false;
    auth_status:string = null;
    loggedInUser: string = '';
    public items:any[] = [];
    profilePage = ProfilePage;



    constructor(public comlapService:ComlapService,public alertCtrl: AlertController,public navCtrl: NavController, public viewCtrl: ViewController,public appCtrl: App) {

    }


    public loginUser(){
      

      this.comlapService.getList('users','username','eq',this.username)
           .subscribe(
               data => {
                   console.log(data);
                   this.items = data;
               },
               err => this.comlapService.logError(err),
               ()=> this.validateUser()
           );

  }

    showAlert(titlep:string,subTitlep:string) {
    let alert = this.alertCtrl.create({
      title: titlep,
      subTitle: subTitlep,
      buttons: ['OK']
    });
    alert.present();
  }

  validateUser(){
        let failed = 0;
        let position = 0;
        for (let i = 0; i < this.items.length; i++) {
          if(this.items[i].username == this.username &&
             this.items[i].password == this.password) {
                 failed = 1; 
                 position = i;
                }
        }
        if (failed != 0) {
            // this.showAlert('Success :D','The connection to the azure database has been successfull.');
            // this.navCtrl.setRoot(this.profilePage)
            // this.viewCtrl.dismiss();
            this.appCtrl.getRootNav().push(this.profilePage,{user: this.items[position]});
            // this.navCtrl.pop();
        }
        else{this.showAlert('Failed :O','The connection to the azure database hasnt success.');}
  }





}
