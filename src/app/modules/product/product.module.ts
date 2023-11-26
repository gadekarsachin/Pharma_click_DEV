import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CategoryComponent } from './component/category/category.component';
import { SubCategoryComponent } from './component/sub-category/sub-category.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubcategorySidebarComponent } from './component/sub-category/component/subcategory-sidebar/subcategory-sidebar.component';
import { SubcategoryContainerComponent } from './component/sub-category/component/subcategory-container/subcategory-container.component';
import { CompanyModule } from '../company/company.module';
import { FallbackSrcDirective } from './component/fallback-src.directive';
import { MenuComponent } from 'src/app/component/layout/menu/menu.component';


@NgModule({
  declarations: [
    ProductCreateComponent, 
    ProductListComponent, 
    ProductDetailsComponent, 
    CategoryComponent, 
    SubCategoryComponent,  
    SubcategorySidebarComponent, 
    SubcategoryContainerComponent, FallbackSrcDirective,
    MenuComponent
  ],

  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CompanyModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  exports:[
    MenuComponent
  ],
})
export class ProductModule { 
}
