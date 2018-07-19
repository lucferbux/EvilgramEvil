import * as firebase from 'firebase/app'

export interface Marker {
    timestamp: Date,
    name: string,
    geoposition: firebase.firestore.GeoPoint
}