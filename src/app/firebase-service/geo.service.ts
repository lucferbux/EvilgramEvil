import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app'
import { Issue } from './issue';
import { Marker } from '../maps-dashboard/marker'

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  markerCollection: AngularFirestoreCollection<Issue>;

  constructor(private afs: AngularFirestore) { 
     this.markerCollection = this.afs.collection('issues', ref=> {
       console.log(ref);
       return ref
     });
  }

  setLocation(marker: Marker) {
    const geopoint = this.generateGeopoint(marker.lat, marker.lng);
    var issue: Issue = {
      location: geopoint,
      description: marker.description,
      title: marker.title,
      date: new Date(),
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
    this.markerCollection.add(issue);
  }


  generateGeopoint(lat: number, lng: number) {
    return new firebase.firestore.GeoPoint(lat, lng);
  }

}
