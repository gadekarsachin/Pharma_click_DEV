import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() classSearch:any;
  @Output() toggleEvent = new EventEmitter<string>();
  var2: any;
  pNameMatch: boolean = true;
  constructor(private apiService: ApiService, private router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }
  closesearch(){
    this.classSearch = 'customNav'
    this.toggleEvent.emit(this.classSearch)
  }

  searchProdComp(data:any)
  {
    console.log("search result", data.value); 
    
    this.var2=JSON.parse(localStorage.getItem('CategoryList'));
    console.log("cat id", this.var2.Id);
    // if((data.value.compName.length!="") || (data.value.pName.length!="") || (data.value.loc.length!="") )
    // {
    this.apiService.SearchProComp(this.var2.Id,data.value.compName, data.value.prodName, data.value.loc, 0,10, this.pNameMatch).subscribe((res:any)=>{
      console.log(res);

      res.m_Item1.forEach(ele=>{
        console.log("comp rating",ele.Rating);
       var newRating = Math.round(ele.Rating*100);
       ele.Rating = (newRating / 100).toFixed(1);
      console.log("newRating on search",newRating);
      });
      // this.comapnyList=res;


      this.apiService.SendCompnylist(res.m_Item1);
      console.log("req comp list",res);
      data.reset();  // Reset all form data
    this.router.navigate(['home/company/company-details']);
    },(err)=>console.log(err))

    
    // return false;
    }
    
    goBack(){
      this.location.back()
    }
}
