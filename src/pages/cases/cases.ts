import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BackandService} from '../../providers/backandService'
import {ListOfAppointmentPage} from '../list-of-appointment/list-of-appointment';
import { AddcasePage } from '../addcase/addcase'

/*
  Generated class for the Cases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cases',
  templateUrl: 'cases.html'
})
export class CasesPage {

  public items:any[] = [];
  patientid:number;
  hospitalid:number;
  listappointment= ListOfAppointmentPage;
  addcase = AddcasePage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private backandService:BackandService) {}

  ngOnInit() {
      this.currentPatientId();
      this.listCases();    
    }
  
  currentPatientId(){

      if(this.navParams.get('patientid')){
        this.patientid = this.navParams.get('patientid');
        this.hospitalid = this.navParams.get('hospitalid');
        console.log('id en cases',this.patientid,this.hospitalid);
        
      }

      else{
      }
  }

  

   public listCases(){
      let filter =
          [
            {
              fieldName: 'patientid',
              operator: 'equals',
              value: this.patientid
              
            },
            {
              fieldName: 'hospitalid',
              operator: 'in',
              value: this.hospitalid
              
            }
          ]
      ;
      
      this.backandService.getList('cases',null,null,filter)
           .subscribe(
               data => {
                   console.log('lista de casos:',data);
                   this.items = data;
               },
               err => this.backandService.logError(err),
               ()=> console.log('Ok.')
           );

  }
  listOfAppointment(item:any){
      this.navCtrl.push(this.listappointment,{currentcases:item});
      // this.navCtrl.push(this.listappointment,{userid:'65'});
    }

  addCase(hospitalid:number){
      this.navCtrl.push(this.addcase,{patientid:this.patientid,hospitalid:this.hospitalid});
      // this.navCtrl.push(this.newappointment,{userid:'65'});
      // console.log('el id del hospital es:',hospitalid);
    }

}