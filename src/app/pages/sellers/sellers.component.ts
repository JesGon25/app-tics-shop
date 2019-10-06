import { Component, OnInit } from '@angular/core';
import {SellersService} from '../../services/sellers.service';
@Component({
    selector: 'app-sellers',
    templateUrl: './sellers.component.html',
    styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

    public sellers:any = [];
    public count:number = 0;
    constructor(private sellerService:SellersService) { 
        this.getSellers();
    }

    ngOnInit() {
    }

    private getSellers(){
        this.sellerService.getSellers().subscribe((res:any)=>{ 
            this.sellers = res.sellers;
            this.count   = res.count;
        },(error)=>{    
            console.log("Error: "+error.message)
        });
    }

}
