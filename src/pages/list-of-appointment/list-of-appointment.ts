import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandService} from '../../providers/backandService'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ListOfAppointment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-of-appointment',
  templateUrl: 'list-of-appointment.html'
})
export class ListOfAppointmentPage {
  description:string = '';
  specialty:string = '';
  myDate:string = '';
  userid:string= '';
  auth_type:string = "N/A";
  is_auth_error:boolean = false;
  auth_status:string = null;
  loggedInUser: string = '';
  public items:any[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private backandService:BackandService
              ,public alertCtrl: AlertController) {

                this.auth_type = backandService.getAuthType();
                this.auth_status = backandService.getAuthStatus();
                this.loggedInUser = backandService.getUsername();
              }

  
  public listAppointment(){
      let filter =
          [
            {
              fieldName: 'userid',
              operator: 'equals',
              value: this.userid
              
            }
          ]
      ;
      
      this.backandService.getList('appointments',null,null,filter)
           .subscribe(
               data => {
                   console.log(data);
                   this.items = data;
               },
               err => this.backandService.logError(err),
               ()=> console.log('Ok. list selected')
           );

  }
  
  public currentUserId(){
    if(this.navParams.get('userid')){
      this.userid = this.navParams.get('userid');
      this.listAppointment();
    }
    else{
    }
    
  }

  ngOnInit() {
    this.currentUserId();    
    }

 showAlert(titlep:string,subTitlep:string) {
    let alert = this.alertCtrl.create({
      title: titlep,
      subTitle: subTitlep,
      buttons: ['OK']
    });
    alert.present();
  }
  showAppointment(){
    
  }

}
