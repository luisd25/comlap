import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NewAppointmentPage} from '../new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../list-of-appointment/list-of-appointment';
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
  public enablefields:boolean = false;
  newappointment = NewAppointmentPage;
  listappointment= ListOfAppointmentPage;

  constructor(public backandService:BackandService,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {}

  
  
    ngOnInit() {
      if(this.navParams.get('user')){
        this.usertype = this.navParams.get('user').usertype;
        let filter =
          [
            {
              fieldName: 'userid',
              operator: 'in',
              value: this.navParams.get('user').userid
            }
          ]
      ;

      this.backandService.getList('patient',null,null,filter)
           .subscribe(
               data => {
                   console.log(data);
                   this.currentUser = data[0];
               },
               err => this.backandService.logError(err),
               ()=> this.currentUserDetail()
           );

      } 
    }

    public currentUserDetail(){
      this.userName = this.currentUser.username;
      this.name = this.currentUser.firstname;
      this.Lastname = this.currentUser.lastname;
      this.email = this.currentUser.email;
  }
    newAppointment(){
      this.navCtrl.push(this.newappointment,{userid:this.currentUser.userid});
      // this.navCtrl.push(this.newappointment,{userid:'65'});

    }
    listOfAppointment(){
      this.navCtrl.push(this.listappointment,{userid:this.currentUser.userid});
      // this.navCtrl.push(this.listappointment,{userid:'65'});
    }
    enabledEdit(){
      this.enablefields = !this.enablefields;
      // return this.enablefields;
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
