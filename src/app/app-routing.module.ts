import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SalesDetailComponent } from './pages/sales-detail/sales-detail.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { SellerAddComponent } from './pages/seller-add/seller-add.component';
import { ProductsComponent } from './pages/products/products.component';
import { SellComponent } from './pages/sell/sell.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { LoginComponent } from './pages/auth/login/login.component';
const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:AdminComponent
    },
    {
        path:'ventas',
        component:SalesComponent
    },
    {
        path:'vender',
        component: SellComponent
    },
    {
        path:'ventas/:id',
        component: SalesDetailComponent
    },
    {
        path:'vendedores',
        component: SellersComponent
    },
    {
        path:'vendedores/create',
        component:SellerAddComponent
    },
    {
        path:'inventario',
        component: ProductsComponent
    },
    {
        path:'inventario/create',
        component:ProductAddComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
