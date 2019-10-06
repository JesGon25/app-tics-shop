import { Component } from '@angular/core';
import {firebase} from '@firebase/app';
import '@firebase/messaging';
import { Auth } from './auth/auth';
import {environment} from '../environments/environment';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent   {
    title = 'app-students-app';
   
    auth = new Auth();
    constructor() {
     
    }

    ngOnInit(){
        firebase.initializeApp(environment.firebase); 
        const messaging = firebase.messaging();
        messaging.usePublicVapidKey("BMptuL4zSJ-ReR04FFybVBDphmjkncu0tUhWqVkPbZsY9gQ6qsTjYTvX-yvju3_2CHVbmy_7T20l22cmjCGrK3U");
        messaging.requestPermission().then(() => {
            alert('Notificacion permission granted');
          
            messaging.getToken().then((token) => {
              alert(token);
              localStorage.setItem('token_nav',token);
            });
          }).catch((err) => {
           alert('Unable to get permission to notify'+err);
        });
    }
   


}
