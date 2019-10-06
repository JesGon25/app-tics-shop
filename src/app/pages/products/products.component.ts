import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    public products:any = [];
    public count:number;
    constructor(private productService: ProductsService) {
        this.getProducts();  
    }

    ngOnInit() {
    }

    private getProducts(){
        this.productService.getProducts().subscribe((res:any)=>{
            this.products = res.products;
            this.count    = res.count;
            console.log(this.products);
        },(error)=>{
            console.log("Error: "+error.message);
        });
    }

}
