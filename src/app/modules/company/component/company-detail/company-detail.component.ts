import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  companyId: any;
  productList: any;
  companylist:any;
  var1: any;
  newRating: number;
  matchUrl: any = window.location.pathname;
  constructor(private route: Router, private commonService: ApiService, 
    private activatedRoute: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {

    

    
  //   if(window.location.search !== ''){
  //   this.activatedRoute.queryParamMap.subscribe(data => {
  //     this.companyId = data.get('id');
  //   console.log("company by Id ",this.companyId);
  //     this.commonService.viewAllCompanyListbyId(this.companyId).subscribe(res =>{
  //       this.companylist = res;
  //     })
  //   })
  // }
  // else{
    this.commonService.sharedCatCompanylist.subscribe((res:any)=>{
      this.companylist=res;
      console.log("res===",res);
      console.log("res22===");
      // var path = window.location.pathname;
      // localStorage.setItem('searchPathValue',window.location.pathname);
      
      // console.log("res comp details", res);
      // if(res.length === 0)
      // {
      //   this.msg=true;
      // }
      // else
      // {
      //   this.companylist=res;
        
      // }
      

      
      // this.companylist.forEach(ele=>{
      //   console.log("this.companylist",this.companylist.Rating);

      //   var newRating;
      // newRating = Math.round(ele.Rating*100);
      // ele.Rating = newRating / 100;
      // // console.log("newRating",this.newRating);
      // });
      
    },(err)=>console.log(err));
  // }
   

    

  }
  companyData(id:any){
    this.route.navigate(['/company-data'], { queryParams: { id: id } });

    // console.log("Hellow every1", this.companyId);
  }

  goBack(){
    // console.log("err");
    this.location.back();
  }
}