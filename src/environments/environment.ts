// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyCYwt5yXYKy2JKwttr_dJTGT-eNSd2OcJw",
    authDomain: "localizador-cajetas.firebaseapp.com",
    databaseURL: "https://localizador-cajetas.firebaseio.com",
    projectId: "localizador-cajetas",
    storageBucket: "localizador-cajetas.appspot.com",
    messagingSenderId: "269185040848"
  },

  googleMapsKey: 'AIzaSyAoVvf3-B8k1k10Bf2vltH0m3RBF8LeADs'

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
