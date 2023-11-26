import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/modules/shared/services/api.service';


@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  @Input() classSearch:any;
  @Output() toggleEvent = new EventEmitter<string>();

  constructor(private apiSer:ApiService) { }

  ngOnInit(): void {
  }
  closesearch(){
    this.classSearch = 'customNav'
    this.toggleEvent.emit(this.classSearch)
  }

  findNews(data:any)
  {
    // console.log(data.value);   

    if((data.value.newsTitle.length!="") || (data.value.newsDescrip.length!="") || (data.value.newsCat.length!="") )
    {
    this.apiSer.SearchNews(data.value.newsTitle, data.value.newsDescrip, data.value.newsCat).subscribe((res:any)=>{
      // console.log(res);
      this.apiSer.setSearchNews(res);
      data.reset(); 
    },(err)=>console.log(err))

    // data.reset();  // Reset all form data
    // return false;

    }
    else
    {
      console.log("textbox is empty 1");
    }
    

   
  }

}


