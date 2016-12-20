import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandService} from '../../providers/backandService'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the NewAppointment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-appointment',
  templateUrl: 'new-appointment.html'
})
export class NewAppointmentPage {
  description:string = '';
  specialty:string = '';
  myDate:string = '';
  userid:number;
  public items:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private backandService:BackandService
              ,public alertCtrl: AlertController) {}

  sendAppointment(){
    // this.showAlert('',this.myDate);
    this.backandService.create('appointments', { description: this.description,specialty:this.specialty
                                            ,date: this.myDate,userid:this.userid}).subscribe(

               data => {
                  // alert('connected');
                  // this.showAlert('Success :D','The appointment was send');

                   this.items.unshift({id:null, description: this.description,specialty:this.specialty
                                            ,date: this.myDate,userid:this.userid });

                    console.log(this.items);
                   

               },

               err => this.backandService.logError(err),

               () => this.navCtrl.pop()

           );
      
  }

  public currentUserId(){
    if(this.navParams.get('userid')){
      this.userid = this.navParams.get('userid');
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
}