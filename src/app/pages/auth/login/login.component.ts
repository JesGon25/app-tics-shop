import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Auth } from '../../../auth/auth';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    public registerForm: FormGroup;
    public submitted = false;
    private authUser = new Auth();
    constructor(
        private formBuilder: FormBuilder, 
        private auth:AuthService,
        private router:Router
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) return;
        let data = JSON.parse(JSON.stringify(this.registerForm.value));
        this.auth.login(data).subscribe((res:any)=>{
            this.authUser.setDataUser(res.user);
            this.authUser.setTokenApi(res.access_token.token);
            this.authUser.setAuth(1);
            this.router.navigate(['/']);
            //location.reload();
        },(error)=>{
            alert("no tienes autorizacion para ingresar");
        });
    }

    



}
