import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComlapService} from '../../providers/comlap.service'
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
  apttitle:string = '';
  description:string = '';
  specialty:string = '';
  myDate:string = '';
  patientid:number;
  caseid:number;
  public items:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private comlapService:ComlapService
              ,public alertCtrl: AlertController) {}

  sendAppointment(){
    // this.showAlert('',this.myDate);
    this.comlapService.create('appointment', {apttitle:this.apttitle, aptdetail: this.description
                                              ,specialty:this.specialty
                                            ,aptstartdate: this.myDate
                                            ,patientid:this.patientid
                                            ,caseid:this.caseid}).subscribe(

               data => {
                  // alert('connected');
                  // this.showAlert('Success :D','The appointment was send');
                    console.log(data);
                   

               },

               err => this.comlapService.logError(err),

               () => this.navCtrl.pop()

           );
      
  }

  public currentUserId(){
    if(this.navParams.get('patientid')){
      this.patientid = this.navParams.get('patientid');
      this.caseid = this.navParams.get('caseid');
      console.log('id en add appointment',this.patientid,this.caseid);
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