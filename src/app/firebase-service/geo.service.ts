import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import * as firebase from 'firebase'
import { Marker } from '../model/marker'

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  markerCollection: AngularFirestoreCollection<Marker>;
  markers: Observable<Marker[]>;

  constructor(private afs: AngularFirestore) { 
     this.markerCollection = this.afs.collection('location', ref=> {
       return ref;
     });
  }

  retreiveMarkers(){
    return this.markers = this.markerCollection.valueChanges();
  }


  generateGeopoint(lat: number, lng: number) {
    return new firebase.firestore.GeoPoint(lat, lng);
  }

}
