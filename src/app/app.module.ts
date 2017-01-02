import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { BackandService } from '../providers/backandService';
import {NewAppointmentPage} from '../pages/new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../pages/list-of-appointment/list-of-appointment';
import { CasesPage } from '../pages/cases/cases';

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
    CasesPage
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
    CasesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},BackandService, Locations, GoogleMaps, Connectivity]
})
export class AppModule {}
