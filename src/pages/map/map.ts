import { Component, ElementRef, ViewChild } from '@angular/core';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController,NavParams, Platform,App } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';

 
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
 
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
    user:any;
    profilePage = ProfilePage;
 
    constructor(public navCtrl: NavController,public appCtrl: App, public navParams: NavParams, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {
        this.user = navParams.data;
        // console.log('parametro: ',navParams.data);
    }
 
    ionViewDidLoad(){
 
        this.platform.ready().then(() => {
 
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
            let locationsLoaded = this.locations.load();
 
            Promise.all([
                mapLoaded,
                locationsLoaded

            ]).then((result) => {
 
                let locations = result[1];
                let int = 0;
                for(let location of locations){
                    int++;
                    // console.log(location.latitude, location.longitude);
                    this.maps.addMarker(location.latitude, location.longitude,location.NombreCentro);
                }
                console.log(int);
 
            });
 
        });
 
    }
    Back(){
        
        
        // this.navCtrl.push(this.profilePage,{user:this.user});
        this.appCtrl.getRootNav().push(this.profilePage,{user:this.user});
    }
 
}