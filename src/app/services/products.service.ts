import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Api } from '../api/api';
import { Auth } from '../auth/auth';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private api = new Api();
    private seller_id = 1;
    private auth = new Auth();
    constructor(private http: HttpClient) { }

    public getProducts(){
        return this.http.get(this.api.getUrlProducts(),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }

    public myProducts(){
        return this.http.get(this.api.getUrlMyProducts(this.seller_id),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }

    public searchLike(search){
        console.log(this.api.getUrlProductLike(search,this.seller_id));
        return this.http.get(this.api.getUrlProductLike(search,this.seller_id),{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }

    public store(data:any,image_url){
        return this.http.post(this.api.getUrlProducts(),{
            name:data.name,
            code:data.code,
            price:data.price,
            description:data.description,
            image_url:image_url,
            quantify:data.quantity,
            user_id:1,
            tax:data.tax
        },{
            headers:{
                "Authorization":"bearer "+this.auth.getTokenApi()
            }
        });
    }
}
