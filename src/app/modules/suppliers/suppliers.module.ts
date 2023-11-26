import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierComponent } from './component/supplier/supplier.component';
import { SupplierFormComponent } from './component/supplier/view/supplier-form/supplier-form.component';
import { CustomerProductDetailComponent } from './component/supplier/view/customer-product-detail/customer-product-detail.component';
import { EnquiryFormComponent } from './component/supplier/view/customer-product-detail/component/enquiry-form/enquiry-form.component';

@NgModule({
  declarations: [
    SupplierComponent, 
    SupplierFormComponent,
    CustomerProductDetailComponent,
    EnquiryFormComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
  ]
})
export class SuppliersModule { }
