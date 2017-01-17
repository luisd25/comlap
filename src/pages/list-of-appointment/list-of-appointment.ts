import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComlapService} from '../../providers/comlap.service'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import {NewAppointmentPage} from '../new-appointment/new-appointment';


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
  hospitalid:number;
  public currentcases:any;
  public items:any[] = [];
  newAppointment = NewAppointmentPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private comlapService:ComlapService
              ,public alertCtrl: AlertController) {
              }

  
  public listAppointment(){
      let filter =
          [
            {
              fieldName: 'id',
              operator: 'equals',
              value: this.currentcases.id
              
            }
          ]
      ;
      
      this.comlapService.getList('appointment','caseid','eq',this.currentcases.id)
           .subscribe(
               data => {
                   console.log(data);
                   this.items = data;
               },
               err => this.comlapService.logError(err),
               ()=> console.log('Ok. list selected')
           );

  }
  
  public currentUserId(){
    if(this.navParams.get('currentcases')){
      this.currentcases = this.navParams.get('currentcases');
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
  addAppointment(){

      this.navCtrl.push(this.newAppointment,{patientid:this.currentcases.patientid,caseid:this.currentcases.id});
    
  }

}
