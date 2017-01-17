import { Component,ViewChild  } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
// import { ProfilePage } from '../pages/profile/profile';
// import {NewAppointmentPage} from '../new-appointment/new-appointment';
// import {ListOfAppointmentPage} from '../list-of-appointment/list-of-appointment';

import { NavController } from 'ionic-angular';
// import { HospitalPage } from '../pages/hospital/hospital';

@Component({
  template: `<ion-nav #myNav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  @ViewChild('myNav') nav: NavController
    rootPage: any  = TabsPage;
  // rootPage: any  = HospitalPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }


}
