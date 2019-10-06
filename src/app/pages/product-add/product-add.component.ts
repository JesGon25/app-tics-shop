import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from '../../services/products.service';
@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
    public imagen = "";
    public registerForm: FormGroup;
    public submitted = false;
    public loadPercent:Observable<number>;
    constructor(
        private formBuilder: FormBuilder, 
        private storage: AngularFireStorage,
        private productService: ProductsService 
        ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            code: ['', [Validators.required]],
            price: ['', [Validators.required]],
            tax: ['', [Validators.required]],
            quantity: ['', [Validators.required]],
            description: ['']
        });
    }

    choose(e: any) {
        console.log(e.target.files[0])
        let file = e.target.files[0];
        let nameFile = 'product_' + this.getNameFile() + '.png';
        const ref = this.storage.ref(nameFile);
        let response = this.storage.upload(nameFile, file);
        this.loadPercent = response.percentageChanges();
        response.snapshotChanges().pipe(finalize(()=>{
            let url_image = ref.getDownloadURL();
            url_image.subscribe((res)=>{
                this.imagen = res;
            })
        })).subscribe();
    }
    public getNameFile() {
        return Math.random().toString(36).substring(2);
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) return;
        let data = JSON.parse(JSON.stringify(this.registerForm.value));
        this.productService.store(data,this.imagen).subscribe((res:any)=>{
            console.log(res);
        });
    }

}
