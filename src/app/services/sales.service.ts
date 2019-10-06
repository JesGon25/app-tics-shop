import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Api} from '../api/api';
import { Auth } from '../auth/auth';
@Injectable({
    providedIn: 'root'
})
export class SalesService {
    private api = new Api();
    private auth = new Auth();
    private isAdmin = null;
    constructor(private http: HttpClient) {
        if(this.auth.getUserData().rol == 'admin')
            this.isAdmin = true;
    }

    getSales(){
        if(this.isAdmin != true)
            return this.mySales(this.auth.getUserData().id);
        return this.http.get(this.api.getUrlSales(),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        })
    }
    getSale(sale_id){
        return this.http.get(this.api.getUrlSaleId(sale_id),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }

    mySales(user_id){
        return this.http.get(this.api.getUrlMySales(user_id),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }

    store(user_id,paymenth_method,total,discount,quantify,product_id){
        return this.http.post(this.api.getUrlSales(),{
            user_id:user_id,
            paymenth_method:paymenth_method,
            total:total,
            discount:discount,
            quantity:quantify,
            product_id:product_id
        },{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }

    cancelNotificationSale(token_firebase,token_admin,venta_id){
        let message = `El vendedor ${this.auth.getUserData().username} Require cancelar la venta`;
        let url     = `https://angular-crud-firebase-7c7a6.firebaseapp.com/ventas/${venta_id}`;
        console.log(url);
        let body = {
            "to":token_admin,
            "notification": {
                "title": "Shop Online",
                "body": message,
                "icon": "./img/icons/android-chrome-192x192.png",
                "click_action" : url
            }
        }
        let endpoint = "https://fcm.googleapis.com/fcm/send";
        return this.http.post(endpoint,body,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":"key="+token_firebase
            }
        });
    }
}
