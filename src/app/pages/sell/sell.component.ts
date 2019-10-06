import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SalesService } from '../../services/sales.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Auth } from '../../auth/auth';
@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

    public products:any = [];
    private auth = new Auth();
    constructor(
        private productService:ProductsService, 
        private saleService:SalesService,
        private router:Router
    ) { 
        this.getMyProducts();
    }

    ngOnInit() {
    }

    private getMyProducts(){
        this.productService.myProducts().subscribe((res:any)=>{
            this.products = res.products;
            console.log(this.products)
        },(error)=>{
            console.log("error: "+error.message);
        })
    }

    search(e:any){
        let search = e.target.value || '';
        this.productService.searchLike(search).subscribe((res:any)=>{
            this.products = res.products;
        },(error)=>{
            console.log(error.message);
        });  
    }

    sell(e,price,stock,product_id){
        let amount = e.target.value || null;
        if(amount > stock) { alert("stock insuficiente"); return}
        if(amount == null) {alert("ingresa la cantidad"); return}
        let user_id         = this.auth.getUserData().id;
        let paymenth_method = "efectivo";
        let total           = amount * price;
        let discount        = 0.00;
        let quantity        = amount;

        this.saleService
            .store(user_id,paymenth_method,total,discount,quantity,product_id)
            .subscribe((res:any)=>{
                this.router.navigate(['/ventas/'+res.sale.id]);
            });
    }

}
