import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { HttpClient } from '@angular/common/http'
import { Auth } from '../auth/auth';
@Injectable({
    providedIn: 'root'
})
export class SellersService {

    private api = new Api();
    private auth = new Auth();
    constructor(private http: HttpClient) { }

    public getSellers(){ 
        return this.http.get(this.api.getUrlSellers(),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }
    public store(data:any){
        return this.http.post(this.api.getUrlSellers(),{
            "username":data.name,
            "email":data.email,
            "password":data.password,
            "avatar":"https://image.flaticon.com/icons/svg/1029/1029023.svg",
            "rol":"seller"
        },{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            } 
        });
    }
}
