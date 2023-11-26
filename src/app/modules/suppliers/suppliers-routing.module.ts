import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent } from './component/supplier/supplier.component';
import { CustomerProductDetailComponent } from './component/supplier/view/customer-product-detail/customer-product-detail.component';


const routes: Routes = [
  {
    path:'supplierContact',
    component: SupplierComponent
  },
  {
    path:'customerProductDetail',
    component:CustomerProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
