import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandService} from '../../providers/backandService'

/*
  Generated class for the Addcase page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addcase',
  templateUrl: 'addcase.html'
})
export class AddcasePage {
  
  patientid:number;
  hospitalid:number;
  casetitle:string;
  casedescription:string;
  specialty:string;
  myDate:string;
  casecomments:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private backandService:BackandService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcasePage');
  }

  ngOnInit() {
      this.currentPatientId();
          
    }
  
  currentPatientId(){

      if(this.navParams.get('patientid')){
        this.patientid = this.navParams.get('patientid');
        this.hospitalid = this.navParams.get('hospitalid');
        console.log('id en add cases',this.patientid,this.hospitalid);
        
      }

      else{
      }
  }

   sendCase() {
      
      if(!this.casetitle || this.casetitle.trim()==''){
        // this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.casedescription || this.casedescription.trim()==''){
        // this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.myDate || this.myDate.trim()==''){
        // this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }
      else if(!this.specialty || this.specialty.trim()==''){
        // this.showAlert('Blancks Fields','Please Fill the Blancks Fields');
        return;
      }

       this.backandService.create('cases', {hospitalid:this.hospitalid,casetitle: this.casetitle
                                            , casedescription:this.casedescription
                                            ,casestartdate: this.myDate,specialty:this.specialty
                                            ,casecomments:this.casecomments,patientid:this.patientid}).subscribe(

               data => {
                  // this.showAlert('Success :D','You can now loggin.');
               },

               err => this.backandService.logError(err),

               () => this.navCtrl.pop()

           );

   }

}
