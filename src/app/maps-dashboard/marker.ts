export class Marker {
    lat: number;
    lng: number;
    description: string;
    title: string;
  
    constructor(lat: number, lng:number) {
      this.lat = lat;
      this.lng = lng;
      this.title = "";
      this.description = "";
    }
  }