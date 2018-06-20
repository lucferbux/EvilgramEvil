import * as firebase from 'firebase/app'

export class Issue {
    location: firebase.firestore.GeoPoint;
    description: string;
    title: string;
    date: Date;
    image: string;
}