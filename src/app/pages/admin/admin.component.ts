import { Component, OnInit } from '@angular/core';
import {Auth} from '../../auth/auth';
import { Router } from '@angular/router';
import { NgLocalization } from '@angular/common';
export interface Section {
    name: string;
    total?: number;
    icon: string;
    router:string;
}
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    user = '';
    rol  = '';
    logged = true;
    auth = new Auth();
    folders: Section[] = [
        {
            name: 'Ventas',
            total: 5,
            icon: 'money',
            router: '/ventas'
        },
        {
            name: 'Cancelaciones',
            total: 2,
            icon: 'cancel_presentation',
            router: '/cancelar'
        },
        {
            name: 'Vendedores',
            total: 3,
            icon: 'peoples',
            router: 'vendedores'
        },
        {
            name: 'Inventario',
            total: 5,
            icon: 'shopping_basket',
            router: '/inventario'
        },
        /*{
            name: 'Salir',
            total: -1,
            icon: 'backspace',
            router: '/login'
        }*/
    ];

    constructor( private router:Router){}

    ngOnInit() {
        if(this.auth.isAuth() == '1'){
            this.user = this.auth.getUserData().username;
            this.rol  = this.auth.getUserData().rol;
        }else{
            this.logged = false;
        }
    }

    logout(){
        this.auth.logout();
        this.logged = false;
        this.router.navigate(['/login']);
        //location.reload();
    }


}
