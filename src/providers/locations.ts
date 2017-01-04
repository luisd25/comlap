import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BackandService} from './backandService'
import { Geolocation } from 'ionic-native';
 
@Injectable()
export class Locations {
 
    public hospitalList: any;
 
    constructor(public backandService:BackandService,public http: Http) {
 
    }
 
    load(){
 
        if(this.hospitalList){
            return Promise.resolve(this.hospitalList);
        }
 
        return new Promise(resolve => {
                    let filter =
                [
                    {
                    fieldName: "Provincia",
                    operator: "contains",
                    value: "SANTO DOMINGO"
                    }
                ]
            ;

            this.backandService.getList('hospital',280,null,filter)
           .subscribe(
               data => {
                   console.log(data);
                   this.hospitalList = this.applyHaversine(data);
 
                this.hospitalList.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });
 
                resolve(this.hospitalList);
               },
               err => this.backandService.logError(err),
               ()=> console.log('loaded hospital')

            
           );
 
        });
 
    }
 
    applyHaversine(locations){

        Geolocation.getCurrentPosition().then((position) => {
 
        // UNCOMMENT FOR NORMAL USE
        // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let usersLocation = {
            lat: position.coords.latitude, 
            lng:  position.coords.longitude
        };
        // console.log(position.coords.latitude, position.coords.longitude);
        locations.map((location) => {
 
            let placeLocation = {
                lat: location.latitude,
                lng: location.longitude
            };
 
            location.distance = this.getDistanceBetweenPoints(
                usersLocation,
                placeLocation,
                'km'
            ).toFixed(2);
        });
 
        locations.sort((locationA, locationB) => {
                    return locationA.distance - locationB.distance;
                });
        
        return locations;
        
        
        
        });
 
        let usersLocation = {
            lat: 40.713744, 
            lng: -74.009056
        };
 
        locations.map((location) => {
 
            let placeLocation = {
                lat: location.latitude,
                lng: location.longitude
            };
 
            location.distance = this.getDistanceBetweenPoints(
                usersLocation,
                placeLocation,
                'km'
            ).toFixed(2);
        });
 
        return locations;
    }
 
    getDistanceBetweenPoints(start, end, units){
 
        let earthRadius = {
            miles: 3958.8,
            km: 6371
        };
 
        let R = earthRadius[units || 'miles'];
        let lat1 = start.lat;
        let lon1 = start.lng;
        let lat2 = end.lat;
        let lon2 = end.lng;
 
        let dLat = this.toRad((lat2 - lat1));
        let dLon = this.toRad((lon2 - lon1));
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        
        return d;
        
      
 
    }
 
    toRad(x){
        return x * Math.PI / 180;
    }
 
}