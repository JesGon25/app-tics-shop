import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from 'src/app/auth/auth';
@Component({
    selector: 'app-sales-detail',
    templateUrl: './sales-detail.component.html',
    styleUrls: ['./sales-detail.component.scss']
})
export class SalesDetailComponent implements OnInit {
    public sale_id:any   = 11;
    public sale:any      = [];
    public user:any      = [];
    public product:any   = [];
    public inventory:any = [];
    public isAdmin;
    private auth = new Auth();
    constructor(
        private saleService:SalesService,
        private route: ActivatedRoute,
        private authService:AuthService
    ) { 
        this.sale_id = this.route.snapshot.params.id;
        this.getSale(this.sale_id);

        if(this.auth.getUserData().rol == 'admin'){
            this.isAdmin = true;
        }
        
    }

    ngOnInit() {

    }

    private getSale(sale_id){
        this.saleService.getSale(sale_id).subscribe((res:any)=>{
            this.sale    = res.sale;
            this.user    = res.user_data;
            this.product = res.product_data;
            this.inventory = res.product_data.inventory;
        },(error)=>{
            console.log("error: "+error.message);
        });
    }

    cancel(sale_id){
        let token_firebase = "AAAAFGWKpko:APA91bHAjWXjh-YLIuDe7S_gls2xlJfLGcCPqMpbv9WIGdsrZauO3NhSPDpNU9S9oSvBPNg_XBSEd0dZKy8LX_IxjLpi6G70OZRC48PFUEUgLeOtuUtO9R7p9i-6z99nbWj4wVgt6G-B";
        this.authService.getTokenAdmin().subscribe((res:any)=>{
            this.saleService.cancelNotificationSale(token_firebase,res.token,sale_id).subscribe((res)=>{
                alert("1")
            },(error)=>{
                console.log("error:" +error);
            });
        });
        
    }

}
