import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Api } from '../api/api';
import { Auth } from '../auth/auth';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private api = new Api();
    private auth = new Auth();
    constructor(private http: HttpClient) { }

    login(data: any) {
        console.log(this.api.getUrlLogin())
        return this.http.post(this.api.getUrlLogin(),{
            email:data.email,
            password:data.password,
            token_nav:this.auth.getTokenNav()
        });
    }
    getTokenAdmin(){
        return this.http.get(this.api.getUrlTokenAdmin(),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        })
    }
}
