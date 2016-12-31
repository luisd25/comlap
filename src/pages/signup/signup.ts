import {Component} from '@angular/core';
import 'rxjs/Rx'
import {BackandService} from '../../providers/backandService'
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { NavController, Nav , Tabs } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'signup.html',
  selector: 'page-signup',
})
export class SignupPage {
  tab:Tabs;
  userName: string = '';
  email:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';
  public items:any[] = [];


  constructor(public navCtrl: NavController, private nav: Nav, private backandService:BackandService
              ,public alertCtrl: AlertController) 
              {
                this.tab = this.navCtrl.parent;

  }

  public register() {
      if (this.signUpPassword != this.confirmPassword){
        this.showAlert('Password incorrect','');
        return;
      }
      
      else if(!this.userName || this.userName.trim()==''){
        this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.email || this.email.trim()==''){
        this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.confirmPassword || this.confirmPassword.trim()==''){
        this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.signUpPassword || this.signUpPassword.trim()==''){
        this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }

       this.backandService.create('users', {username: this.userName, email:this.email
                                            ,password: this.signUpPassword,usertype:'Patient'}).subscribe(

               data => {
                  this.showAlert('Success :D','You can now loggin.');
               },

               err => this.backandService.logError(err),

               () => this.tab.select(1)

           );

   }


  public socialSignin(provider) {
    var $obs = this.backandService.socialSignin(provider);
    $obs.subscribe(
        data => {
            console.log('Sign up succeeded with:' + provider);
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }

  public inAppSocial(provider) {
    var $obs = this.backandService.inAppSocial(provider);
    $obs.subscribe(
        data => {
            console.log('Sign up succeeded with:' + provider);
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
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
