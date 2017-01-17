import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { BackandService } from '../providers/backandService';
import { ComlapService } from '../providers/comlap.service';

import {NewAppointmentPage} from '../pages/new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../pages/list-of-appointment/list-of-appointment';
import { CasesPage } from '../pages/cases/cases';
import { AddcasePage } from '../pages/addcase/addcase'

import { HospitalPage } from '../pages/hospital/hospital';
import { MapPage } from '../pages/map/map';
import { ListhospitalPage } from '../pages/listhospital/listhospital';
import { Locations } from '../providers/locations';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    TabsPage,
    ProfilePage,
    NewAppointmentPage,
    ListOfAppointmentPage,
    HospitalPage,
    MapPage,
    ListhospitalPage,
    CasesPage,
    AddcasePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    TabsPage,
    ProfilePage,
    NewAppointmentPage,
    ListOfAppointmentPage,
    HospitalPage,
    MapPage,
    ListhospitalPage,
    CasesPage,
    AddcasePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},BackandService,ComlapService, Locations, GoogleMaps, Connectivity]
})
export class AppModule {}
