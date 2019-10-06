import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellersService }from '../../services/sellers.service';
@Component({
    selector: 'app-seller-add',
    templateUrl: './seller-add.component.html',
    styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit {
    public registerForm: FormGroup;
    public submitted = false;
    constructor(private formBuilder: FormBuilder,private sellerService:SellersService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) return;
        let data = JSON.parse(JSON.stringify(this.registerForm.value));
        this.sellerService.store(data).subscribe((res)=>{
            console.log(res);
        },(error)=>{
            console.log("error: "+error.message);
        });
    }

}
