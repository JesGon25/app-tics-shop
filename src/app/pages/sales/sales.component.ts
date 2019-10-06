import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

    public sales:any = [];
    public count:number = 0;
    constructor(private saleService:SalesService) { 
        this.getSales();
    }

    ngOnInit() {
    }

    public getSales(){
        this.saleService.getSales().subscribe((res:any)=>{
            this.sales = res.sales;
            this.count = res.count;
            console.log(res)
        },(error)=>{   
            console.log("error: "+error.message);
        });
    }

}
