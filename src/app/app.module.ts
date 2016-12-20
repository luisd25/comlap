import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { BackandService } from '../providers/backandService';
import {NewAppointmentPage} from '../pages/new-appointment/new-appointment';
import {ListOfAppointmentPage} from '../pages/list-of-appointment/list-of-appointment';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    TabsPage,
    ProfilePage,
    NewAppointmentPage,
    ListOfAppointmentPage
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
    ListOfAppointmentPage
  ],
  providers: [BackandService]
})
export class AppModule {}
