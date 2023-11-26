import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any[] = [
    {
      url: "assets/images/img-1.jpg",
      prodName: "Tablats",
      price: "50",
      type: "Sachet, Pouches, Strips, Carton, Bottles",
      dose: ">600mg, 501mg-600mg, <100 mg, 101mg-250mg, 251mg-350mg, 351mg-500mg",
      allpication: "Brain And Nervous System Medicines, Digestive System Medicines, Cardiovascular And Respiratory Medicines",
      madicine_type: "Allopathic",
      company_name: "Yashita Pharmaceuticals Private Limited",
      company_address: "Syndicate,Thane",
      company_phone: "034865433678"
    },
    {
      url: "assets/images/img-2.jpg",
      prodName: "forte Tablats",
      price: "300",
      type: "",
      dose: "",
      application: "",
      madicine_type: "",
      company_name: "Gandhi Medicos",
      company_address: "Sadar Bazaar,New Delhi",
      company_phone: "034865433678"
    },
    {
      url: "assets/images/img-3.jpg",
      prodName: "cleanbuterol Tablats",
      price: "400",
      type: "",
      dose: "",
      application: "",
      madicine_type: "",
      company_name: "Yashita Pharmaceuticals Private Limited",
      company_address: "Syndicate,Thane",
      company_phone: "034865433678"
    },
    {
      url: "assets/images/img-4.jpg",
      prodName: "Varenicline Tablats",
      price: "400",
      type: "",
      dose: "",
      application: "",
      madicine_type: "",
      company_name: "Yashita Pharmaceuticals Private Limited",
      company_address: "Syndicate,Thane",
      company_phone: "034865433678"
    },
    {
      url: "assets/images/img-5.jpg",
      prodName: "Avanafil Tablats",
      price: "200",
      type: "",
      dose: "",
      application: "",
      madicine_type: "",
      company_name: "Yashita Pharmaceuticals Private Limited",
      company_address: "Syndicate,Thane",
      company_phone: "034865433678"
    },
    {
      url: "assets/images/img-6.jpg",
      prodName: "Tadlafil Tablats",
      price: "300",
      type: "",
      dose: "",
      application: "",
      madicine_type: "",
      company_name: "Yashita Pharmaceuticals Private Limited",
      company_address: "Syndicate,Thane",
      company_phone: "034865433678"
    },
    {
      url: "assets/images/img-7.jpg",
      prodName: "Slidenafil Tablats",
      price: "300",
      type: "",
      dose: "",
      application: "",
      madicine_type: "",
      company_name: "Yashita Pharmaceuticals Private Limited",
      company_address: "Syndicate,Thane",
      company_phone: "034865433678"
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {

    // this.productService.viewAllProduct().subscribe(data =>{
    //   this.productList = data;
    // })
  }
  submit() {
    this.router.navigate(['home/suppliers/supplierContact']);
  }

}
