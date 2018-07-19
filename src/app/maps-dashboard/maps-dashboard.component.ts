import { Component } from '@angular/core';
import { GeoService } from '../firebase-service/geo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MouseEvent } from '@agm/core';
import { Marker } from '../model/marker';

@Component({
  selector: 'maps-dashboard',
  templateUrl: './maps-dashboard.component.html',
  styleUrls: ['./maps-dashboard.component.css']
})
export class MapsDashboardComponent {
  lat: number;
  lng: number;

  markers: Marker[];
  subscription: any;
  validationGroup: FormGroup;
  

  constructor(private fireService: GeoService) {
      this.getUserLocation();
      this.subscription = this.fireService.markerCollection.valueChanges().subscribe( 
        (hits: Marker[]) => {
          console.log(hits);
          this.markers = hits;
        }
      )
  }

  private getUserLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

}


