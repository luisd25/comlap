import {Component} from '@angular/core';
import 'rxjs/Rx'
import {BackandService} from '../../providers/backandService'
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { URLSearchParams } from "@angular/http"
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'signup.html',
  selector: 'page-signup',
})
export class SignupPage {

  firstName:string = '';
  lastName:string = '';
  userName: string = '';
  email:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';
  public items:any[] = [];


  constructor(private backandService:BackandService,public alertCtrl: AlertController) {


  }

  public register() {
      if (this.signUpPassword != this.confirmPassword){
        this.showAlert('Password incorrect','');
        return;
      }
      else if(!this.firstName || this.firstName.trim()==''){
        this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.lastName || this.lastName.trim()==''){
        this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
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

       this.backandService.create('user', { name: this.firstName,lastname:this.lastName
                                            ,username: this.userName, email:this.email
                                            ,password: this.signUpPassword}).subscribe(

               data => {
                  // alert('connected');
                  this.showAlert('Success :D','You can now loggin.');

                   this.items.unshift({ id: null, username: this.userName, password: this.signUpPassword });

                    console.log(this.items);
                   this.firstName = '';
                   this.lastName = '';
                   this.userName = '';
                   this.email = '';
                   this.signUpPassword = '';

               },

               err => this.backandService.logError(err),

               () => console.log('OK')

           );

   }

    public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    var $obs = this.backandService.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName);
    $obs.subscribe(
      data => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      err => {
          this.backandService.logError(err)
      },
      () => console.log('Finish Auth'));
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
