import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NewAppointmentPage} from '../new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../list-of-appointment/list-of-appointment';
import { HospitalPage } from '../hospital/hospital';

import {BackandService} from '../../providers/backandService'


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
  public email:string = '';
  public usertype:string = '';
  public updateobject:string = '';
  public enablefields:boolean = false;
  newappointment = NewAppointmentPage;
  listappointment= ListOfAppointmentPage;
  hospitalTabs= HospitalPage;

  constructor(public backandService:BackandService,public navCtrl: NavController, public navParams: NavParams
  ,public alertCtrl: AlertController) {}

  
  
    // ngOnInit() {
    //   if(this.navParams.get('user')){
    //     this.usertype = this.navParams.get('user').usertype;
    //     let filter =
    //       [
    //         {
    //           fieldName: 'userid',
    //           operator: 'in',
    //           value: this.navParams.get('user').userid
    //         }
    //       ]
    //   ;

    //   this.backandService.getList('patient',null,null,filter)
    //        .subscribe(
    //            data => {
    //                console.log(data);
    //                this.currentUser = data[0];
    //            },
    //            err => this.backandService.logError(err),
    //            ()=> this.currentUserDetail()
    //        );

    //   } 
    // }

    public currentUserDetail(){
      
      this.userName = this.currentUser.username;
      this.name = this.currentUser.firstname;
      this.Lastname = this.currentUser.lastname;
      this.email = this.currentUser.email;
  }
    newAppointment(){
      this.navCtrl.push(this.newappointment,{userid:this.currentUser.patientid});
      // this.navCtrl.push(this.newappointment,{userid:'65'});

    }
    listOfAppointment(){
      this.navCtrl.push(this.listappointment,{userid:this.currentUser.userid});
      // this.navCtrl.push(this.listappointment,{userid:'65'});
    }

    mapview(){
      this.navCtrl.push(this.hospitalTabs,{userid:this.currentUser.userid});
      // this.navCtrl.push(this.listappointment,{userid:'65'});
    }
    enabledEdit(){
      this.enablefields = !this.enablefields;
      // return this.enablefields;
    }
    update(){
       
      this.currentUser.username = this.userName;
      this.currentUser.firstname=this.name ;
      this.currentUser.lastname = this.Lastname;
      this.currentUser.email = this.email;


       let updateobject = {	
        fileid: this.currentUser.fileid,
        sufferid: this.currentUser.sufferid,
        userid: this.currentUser.userid,
        patientid: this.currentUser.patientid,
        identification: this.currentUser.identification,
        ssn: this.currentUser.ssn,
        firstname: this.currentUser.firstname,
        secondname: this.currentUser.secondname,
        lastname: this.currentUser.lastname,
        secondlastname: this.currentUser.secondlastname,
        gender: this.currentUser.gender,
        birthdate: this.currentUser.birthdate,
        pweight: this.currentUser.pweight,
        pheight: this.currentUser.pheight,
        telephone: this.currentUser.telephone,
        celphone: this.currentUser.celphone,
        homephone: this.currentUser.homephone,
        email: this.currentUser.email,
        details: this.currentUser.details,
        appointment: this.currentUser.appointment,
        username: this.currentUser.username
    }
      // this.showAlert('',this.updateobject);
      // this.backandService.update('patient',this.currentUser.patientid,updateobject)
      //      .subscribe(
      //          data => {
      //              console.log(data);
      //             //  this.currentUser = data[0];
      //          },
      //          err => this.backandService.logError(err),
      //          ()=> this.showAlert('updated','')
      //      );

      this.backandService.update('patient', '3',updateobject)
        .subscribe(
                data => {
                  console.log(data);
                },
                err => this.backandService.logError(err),
                () => this.successonUpdate()
            );
    }

    successonUpdate(){
      // this.showAlert('Updated','Datos Actualizados');
      this.enablefields = !this.enablefields;

    }

  // showAlert(titlep:string,subTitlep:string) {
  //   let alert = this.alertCtrl.create({
  //     title: titlep,
  //     subTitle: subTitlep,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

}
