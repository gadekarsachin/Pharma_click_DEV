import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { SubcategoryContainerComponent } from './component/sub-category/component/subcategory-container/subcategory-container.component';
import { SubcategorySidebarComponent } from './component/sub-category/component/subcategory-sidebar/subcategory-sidebar.component';
import { SubCategoryComponent } from './component/sub-category/sub-category.component';


const routes: Routes = [
  // {
  //   path: '', // host/product
  //   redirectTo: 'Product',
  // },
  // {
  //   path:'product', // host/product
  //   component: ProductComponent
  // },
  {
    path: 'product-create', // host/product/category
    component: ProductCreateComponent
  },
  {
    path: 'category', // host/product/category
    component: CategoryComponent
  },
  {
    path: 'sub-category', // host/product/sub-category
    component: SubCategoryComponent,
    children: [
      {
        path: 'sub-category/subcategory-sidebar', component: SubcategorySidebarComponent
      },
      {
        path: 'sub-category/subcategory-container', component: SubcategoryContainerComponent
      }
    ]
  },
  {
    path:'product-list', // host/product
    component: ProductListComponent
  },
  {
      path:'product-details', // host/product
      component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

}
