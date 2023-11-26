import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-all-info',
  templateUrl: './all-info.component.html',
  styleUrls: ['./all-info.component.css']
})
export class AllInfoComponent implements OnInit {


  catList:any;
  constructor(private apiser:ApiService) { }

  ngOnInit(): void {

    ($('#owl-carousel')as any).owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 2.5,
})

    this.apiser.viewAllCategories().subscribe((res:any)=>{
      console.log(res);
      this.catList=res;
    },(err)=>console.log(err));
    
  }

 

}
