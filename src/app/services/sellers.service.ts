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
}
