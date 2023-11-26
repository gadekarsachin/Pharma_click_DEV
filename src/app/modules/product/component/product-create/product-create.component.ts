import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Product } from 'src/app/shared/product';
import * as introJs from 'intro.js/intro.js';

// import * as $ from 'jquery';
// import { data } from 'jquery';

import { Category } from 'src/app/shared/category';
import { Location } from '@angular/common';
import { SubCategory } from 'src/app/shared/sub-category';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  path:any;
  path1:any;
  public classList:string = "";
  public filterList:string = "";
  single_val;
  defultproductlistval:any;
  single_val2:any;
  productList: any;
  categoryList: any;
  var2: any;
  var1: any;
  var3: any;
  public activeClass:any;
  public activeClassSub: any;
  subCategoryList: any;
  advImg:any;
  showBtns: boolean = false;
  introJS = introJs();
  comapnyList:any;
  pNameMatch: boolean = false;

  constructor(private router: Router, private apiService: ApiService, private location: Location) { }
  scrollLeft() {
    const listContainer = document.getElementById('listContainer');
    listContainer.scrollLeft -= 100;
  }
  scrollRight() {
    const listContainer = document.getElementById('listContainer');
    listContainer.scrollLeft += 100;
  }
New



  activeDatas: boolean = true;
  basicurl:any;

  ngOnInit(): void {

    this.path1 = window.location.pathname;
    this.introJS.setOptions({
      steps: [
        {
        
          title: 'Application Tour..?',
          element: document.querySelector('.btnShow'),
          intro: 'Click on Next to view the application tour'
        },
        {
        
          title: 'Categories',
          element: document.querySelector('.catSlider11'),
          intro: 'Click to view the categories'
        },
        {
        
          title: 'SubCategories',
          element: document.querySelector('.slider1'),
          position: 'top',
          intro: 'Click on the button to view companies and product related to this sub-category'           
        },
        {
        
          title: 'Select companies or product',
          element: document.querySelector('.sortCls'),
          intro: 'Click to view companies or products related to selected categories and sub-categories'
        },
        {
          title: 'Company list',
          element: document.querySelector('.proCls'),
          position: 'right',
          intro: 'Click on the button to view detailed information about companies and product related to this categories and sub-categories'
        },
        {
          title: 'Advertisements',
          element: document.querySelector('.carousel11'),
          intro: 'Scroll left or right to view adds'
        }
  ],
  showProgress: true,
  disableInteraction: false
  });
   
  this.path=window.location.pathname;

  //   setTimeout(() => {
  // this.introJS.start();
  // this.introJS.onbeforechange((targetElement) => {
  // console.log("new step");
  // this.introJS.refresh();
  //   });
  //   }, 1000)

    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //  history.go(-1);
    // (navigator as any).app.backHistory();
    // }
  
    // console.log( this.router.url);

    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
     
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate(['/home/product/category']);
    // }
    
// [START]  [Dipak Ahirav][12-Oct-2022] - Show Active menu on screen
      document.getElementsByClassName('first_slider')[0].scrollLeft = 0;

      var menus =document.getElementsByClassName(
        'newClassItem',
      ) as HTMLCollectionOf<HTMLElement>;

      setTimeout(()=>{
      
        for (var i = 0; i < menus.length; i++) {
          
            if (menus[i].classList.contains('active-link')) {
          
                document.getElementsByClassName('first_slider')[0].scrollLeft = menus[i].offsetLeft;
            }
        }
      },1000)

// [END] [Dipak Ahirav][12-Oct-2022] - Show Active menu on screen



    this.basicurl= window.location.pathname;
    // this.basicurl="home/product/product-create";
    // console.log("prod==="+ this.basicurl);
   

    $(document).ready(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    });

     // take subcategories data from category Comp.   
    this.apiService.sharedParam.subscribe((res:any)=>{
      console.log("subcategories data", res);
      this.subCategoryList=res;

   

      setTimeout(()=>{
        // this.activeClassSub=this.subCategoryList[0].Id;
        var categorySelected = JSON.parse(localStorage.getItem("CategoryList"));
        this.activeClass = categorySelected.Id;
        this.apiService.viewAllCompanyinfo(categorySelected.Id).subscribe((res:any)=>{
          // console.log("product list ",res);
          this.productList=res;
          this.productList.sort((a,b) => a.Name.toLowerCase()>b.Name.toLowerCase() ? 1 : -1);
          
         },(err)=>console.log(err));

         
        this.apiService.viewAllCompanyListByCatId(categorySelected.Id, 0,50).subscribe((res:any)=>{
        console.log("Comapny list ",res);
        this.comapnyList=res.m_Item1;
        
        this.comapnyList.forEach(ele=>{
          console.log("this.companylist",this.comapnyList.Rating);
  
          var newRating;
        newRating = Math.round(ele.Rating*100);
        ele.Rating = (newRating / 100).toFixed(1);
        console.log("newRating",ele.Rating);
        });
        // send category seletecd value to api serviece and it take from company-detail comp.
        this.apiService.SendCompnylist(this.comapnyList);
        
        },(err)=>console.log(err))

      },1000)

   },(err)=>console.log(err))

    

    this.apiService.sharedCatActiveId.subscribe((res:any)=>{
      console.log("take cat id ", res);
      
      this.activeClass=res;
    },(err)=>console.log(err))

    
    this.apiService.sharedParamprod.subscribe((res:any)=>{
      // console.log(res);
      this.productList=res;
     
      },(err)=>console.log(err))

    this.apiService.sharedsingleSubCatActiveId.subscribe((res:any)=>{
      // console.log(res);
      this.single_val2=res;
      
    },(err)=>console.log(err))


    this.apiService.viewAllAdvertiseImgs().subscribe((res:any)=>{
      // console.log(res);
      this.advImg=res;
    },(err)=>console.log(err))
  

  
    this.apiService.viewAllCategories().subscribe(data =>{
      this.categoryList = data;
      this.var2=JSON.parse(localStorage.getItem('CategoryList'));
      console.log("local storage=",this.var2);
      // this.activeClass=this.var2.Id;
      this.apiService.viewAllsubCategories(this.var2.Id).subscribe((res:any)=>{
        console.log(res);       
        this.subCategoryList=res;       
      },(err)=>console.log(err))

      // when we refersh the app it display active categories
      // this.activeClass=this.categoryList[1].Id;
         // when we refersh the app it display defult sub Categories  data
      // this.apiService.viewAllsubCategories(this.categoryList[1].Id).subscribe((res:any)=>{
      //   console.log(res);
      //   this.subCategoryList=res;
      // },(err)=>console.log(err))

    },(err)=>console.log(err));
  
}

  redirect(var2){
    localStorage.setItem('CategoryList', JSON.stringify(var2));
   
    // console.log(" this.categoryList=" ,var2);

    this.activeClass=var2.Id;
    

    this.apiService.viewAllsubCategories(var2.Id).subscribe((res:any)=>{
      // console.log(res);
      this.subCategoryList=res; 
    
      // this.activeClassSub=this.subCategoryList[0].Id;

      this.apiService.viewAllProduct(var2.Id).subscribe((res:any)=>{
        // console.log(res);
        this.productList=res;
       },(err)=>console.log(err))


       this.apiService.viewAllCompanyListByCatId(var2.Id, 0,50).subscribe((res:any)=>{
        this.comapnyList=res.m_Item1;

        this.comapnyList.forEach(ele=>{
          console.log("comp rating",ele.Rating);
         var newRating = Math.round(ele.Rating*100);
         ele.Rating = (newRating / 100).toFixed(1);
        // console.log("newRating",newRating);
        });

        this.apiService.SendCompnylist(this.comapnyList);
        console.log("Comapny list ",this.comapnyList);

     },(err)=>console.log(err))

      // console.log("Chceck Object");
      // console.log(res[Object.keys(res)[0]]);
      // this.single_val=res[Object.keys(res)[0]];
      // console.log("single_val",this.single_val.Id);
      // console.log("single_val",Object.values(this.single_val)[0]);
      // this.defultproductlistval=Object.values(this.single_val)[0];
    
      // this.apiService.changeSingleSubCatId(this.defultproductlistval);
        // console.log("Chceck Object");
    },(err)=>console.log(err))

  //  this.router.navigate(['/home/product/product-create']);

  //  this.apiService.viewAllProduct(this.defultproductlistval).subscribe((res:any)=>{
  //   console.log(res);
  //   this.productList=res;
  // },(err)=>console.log(err))
   }

   redirecting(var1){
    this.activeClassSub=var1.Id;
    console.log("Subacatgires",var1);
    localStorage.setItem('subCategoryList', JSON.stringify(var1));

    this.apiService.viewAllProduct(var1.Id).subscribe((res:any)=>{
      // console.log(res);
      this.productList=res;
    },(err)=>console.log(err))

    this.apiService.viewAllCompanyListByCatId(var1.Id,0,50).subscribe((res:any)=>{
      console.log("Comapny list ",res);
   

      res.m_Item1.forEach(ele=>{
        console.log("comp rating",ele.Rating);
       var newRating = Math.round(ele.Rating*100);
       ele.Rating = (newRating / 100).toFixed(1);
      // console.log("newRating",newRating);
      });
      this.comapnyList=res.m_Item1;

      this.apiService.SendCompnylist(this.comapnyList);
   },(err)=>console.log(err))

    // this.router.navigate(['/home/product/product-create']);
   }
  //  

  redirectToCompList(data: any){
    this.activeClassSub=data;
    // this.router.navigate(['home/company/company-details'], { queryParams: { id: var3 } });

    console.log("search result", data.Name, this.pNameMatch); 
  
  this.var2=JSON.parse(localStorage.getItem('CategoryList'));
  // this.var2 = 0;
  console.log("cat id", this.var2.Id);
  // if((data.value.compName.length!="") || (data.value.pName.length!="") || (data.value.loc.length!="") )
  // {
    this.apiService.SearchProComp(this.var2.Id,data.Company, data.Name, data.CompanyAddress, 0,50, this.pNameMatch).subscribe((res:any)=>{
      // console.log(res, data.CompanyAddress, data.Company);

    res.m_Item1.forEach(ele=>{
      console.log("comp rating",ele.Rating);
     var newRating = Math.round(ele.Rating*100);
     ele.Rating = (newRating / 100).toFixed(1);
    console.log("newRating on search",newRating);
    });
    this.comapnyList=res.m_Item1;

    

    this.apiService.SendCompnylist(res.m_Item1);
    this.router.navigate(['home/company/searched-company']);

    console.log("req comp list",res);
  },(err)=>console.log(err))

  // data.reset();  // Reset all form data
  // return false;
   
 }



  selectedPro: string= "companies";
  onChange(val){
    // console.log(val.target.value);
    this.selectedPro=val.target.value;
  }

  receiveMessage(event){
    console.log('event is :', event);
    this.filterList = event;
    this.classList = event;
  }

  sendData(){
      //  var data = _.sortBy(this.products,'name');
    this.activeDatas=true;
    this.productList.sort((a,b) => a.Name.toLowerCase()>b.Name.toLowerCase() ? 1 : -1);
    // console.log(",,,,,...",this.products)
  }
  

getElement(){
  console.log('.....', document.querySelector('.first'));
  return document.querySelector('.first');
}

renderDynamicInputs(){
   this.showBtns = true ;
}
FeaturedCompanies(){
  this.showBtns = true;
}


}

$(document).ready(function() {
  var currentSlide = 0;
  var slides = $('.slider .slide');
  var totalSlides = slides.length;

  function goToPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    $('.slider').css('transform', `translateX(-${currentSlide * 100}%)`);
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    $('.slider').css('transform', `translateX(-${currentSlide * 100}%)`);
  }

  $('.arrow-left').click(function() {
    goToPrevSlide();
  });

  $('.arrow-right').click(function() {
    goToNextSlide();
  });
});


 