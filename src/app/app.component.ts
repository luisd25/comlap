import { Component,ViewChild  } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import {NewAppointmentPage} from '../new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../list-of-appointment/list-of-appointment';

import { NavController } from 'ionic-angular';
import {BackandService} from '../providers/backandService'
import { HospitalPage } from '../pages/hospital/hospital';

@Component({
  template: `<ion-nav #myNav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  @ViewChild('myNav') nav: NavController
    rootPage: any  = TabsPage;
  // rootPage: any  = HospitalPage;

  constructor(platform: Platform, private backandService:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      backandService.setIsMobile(platform.is('mobile'));
      backandService.setAppName('comlap');
      backandService.setSignUpToken('44b098f6-48c0-42e7-965f-f5474199be77');
      backandService.setAnonymousToken('ccfd582c-ece7-46c1-a552-1fa8ec61f71a');
      backandService.signin('luis@123', '1234567');
    });
  }


}
