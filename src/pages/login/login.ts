import {Component} from '@angular/core';
import { AlertController } from 'ionic-angular';
// import {bootstrap} from '@angular/platform-browser-dynamic';
//To do : limit imports
import 'rxjs/Rx'
import {BackandService} from '../../providers/backandService'

@Component({
    templateUrl: 'login.html',
    selector: 'page-login',
})
export class LoginPage {

    username:string = '';
    password:string = '';
    auth_type:string = "N/A";
    is_auth_error:boolean = false;
    auth_status:string = null;
    loggedInUser: string = '';
    public items:any[] = [];

    oldPassword: string = '';
    newPassword: string = '';
    confirmNewPassword: string = '';


    constructor(public backandService:BackandService,public alertCtrl: AlertController) {

        this.auth_type = backandService.getAuthType();
        this.auth_status = backandService.getAuthStatus();
        this.loggedInUser = backandService.getUsername();
    }


    public loginUser(){
      let filter =
          [
            {
              fieldName: 'username',
              operator: 'contains',
              value: 'luisd25'
            }
          ]
      ;

      this.backandService.getList('user',null,null,filter)
           .subscribe(
               data => {
                   console.log(data);
                   this.items = data;
               },
               err => this.backandService.logError(err),
               () => console.log('OK')
           );
        // if(this.items[1].username == 'luisd26')alert('connect success');
        // else{
        //   alert('connect failed');
        // }
        let failed = 0;
        for (let i = 0; i < this.items.length; i++) {
          if(this.items[i].username == this.username &&
             this.items[i].password == this.password) failed = 1;
        }
        if (failed==1) {
            this.showAlert('Success :D','The connection to the azure database has been successfull.');
        }
        else{this.showAlert('Failed :O','The connection to the azure database hasnt success.');}
  }


    public signOut() {
        this.auth_status = null;
        this.backandService.signout();
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
