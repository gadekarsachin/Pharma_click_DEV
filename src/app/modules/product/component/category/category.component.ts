import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { data } from 'jquery';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Category } from 'src/app/shared/category';
import { Product } from 'src/app/shared/product';
import * as introJs from 'intro.js/intro.js';
declare const $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  path:any;
  categoryList: any;
  subCategoryList:any;
  productList: any;
  param_subcat:any;
  param_Prod:any;
  var2: any;
  public activeClass:any;
  banner:any=[];
  banner1:any;
  companylog:any;
  introJS = introJs();
  showBtns: boolean = false;
  inputs = [];
  buttonTypes = ['One', 'Two'];
  constructor(private router: Router, private apiService: ApiService) {

  }

  ngOnInit(): void {
    // Slider Initialize START
    $(document).ready(function(){
      $('.featured-companies-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        dots:true,
        arrows:false,
        nextArrow:false,
        prevArrow:false,
        slidesToScroll: 1,
        responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 3
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '30px',
                      slidesToShow: 3
                  }
              }
          ]
      });
      $('.advertiement_slider').slick({
        slidesToShow: 1,
        dots:true,
        arrows:false,
        nextArrow:false,
        prevArrow:false,
        slidesToScroll: 1,
        responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      slidesToShow: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1
                  }
              }
          ]
      });
    });

    // Slider Initialize END



    this.path = window.location.pathname;
    this.apiService.changeparentCatId(this.activeClass);
    
    this.apiService.viewAllCategories().subscribe(data =>{
      this.categoryList = data;
      
    });
    

    this.introJS.setOptions({
      steps: [
        {
        
          title: 'Application Tour..?',
          element: document.querySelector('.btnShow'),
          intro: 'Click on Next to view the application tour'
        },
        {
          title: 'Categories',
          element: document.querySelector('.catSlider1'),
          intro: 'Click to view the categories'
        },
        {
        
          title: 'Categories',
          element: document.querySelector('.mainCategory'),
          position: 'top',
          intro: 'Click on the button to view companies and product related to this category'           
        },
        
        {
          title: 'Featured Companies',
          element: document.querySelector('.marquee'),
          intro: 'Click on the button to view companies'
        }
      
  ],
  showProgress: true,
  disableInteraction: false
  });

//   setTimeout(() => {
//     // window.location.reload();
//   this.introJS.start();
//   this.introJS.onbeforechange((targetElement) => {
//   console.log("new step");
//   this.introJS.refresh();
  
// });
//   }, 1000)







  

  

   
  this.apiService.viewAllCompanyLogo().subscribe((res:any)=>{
    // console.log(res);
    this.companylog=res;
    
  },(err)=>console.log(err))


  this.apiService.viewsBannerImg().subscribe((res:any)=>{
    // console.log(res);
    this.banner=res;
  },(err)=>console.log(err))

  // this.apiService.viewsBannerImg1().subscribe((res:any)=>{
  //   console.log(res);
  //   this.banner1=res;
  // },(err)=>console.log(err))
  

  }

  redirect(var2){
    this.activeClass=var2.Id;
    // console.log(var2);
    localStorage.setItem('CategoryList', JSON.stringify(var2));
    this.apiService.changeparentCatId(var2.Id);
    
    this.apiService.viewAllsubCategories(var2.Id).subscribe((res:any)=>{
      // console.log(res);
      this.subCategoryList=res;            
      this.param_subcat=res;
      this.apiService.changeParam(this.param_subcat);
    },(err)=>console.log(err))

    // // this.apiService.viewAllProduct(var2.Id).subscribe((res:any)=>{
    // //   console.log(res);
    // //   this.param_Prod=res;
      // this.apiService.changeParamProd(this.param_Prod);
    // // },(err)=>console.log(err))


    this.router.navigate(['/home/product/product-create']);
   }

  
  getElement(){
    // console.log('.....', document.querySelector('.btnShow'));
    return document.querySelector('.btnShow');
  }
  renderDynamicInputs(){
     this.showBtns = true ;
  }
  // FeaturedCompanies(){
  //   this.showBtns = true;
  // }

  renderInputs(buttonType: string){
    switch(buttonType.toUpperCase()){
      case 'ONE':
        this.inputs = ['btnShow'];
        break;
      case 'TWO':
        this.inputs = ['btnShow','mainCategory'];
        break;
      case 'THREE':
        this.inputs = ['btnShow','mainCategory', 'marquee'];
        break;
      default:
        this.inputs = [];
        break;
    }
  }

}
// const slider = document.querySelector(".slider");
// const list = document.querySelector(".menu-list");
// const leftArrow = document.querySelector(".arrow-left");
// const rightArrow = document.querySelector(".arrow-right");

// leftArrow.addEventListener("click", () => {
//   list.scrollLeft -= 200;
// });

// rightArrow.addEventListener("click", () => {
//   list.scrollLeft += 200;
// });
