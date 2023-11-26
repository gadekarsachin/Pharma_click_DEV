import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent implements OnInit {

  @Input() classSearch:any;
  @Output() toggleEvent = new EventEmitter<string>(); 
    myform:any;

  constructor(private apiSer:ApiService) { }

  ngOnInit(): void {

  }
  closesearch(){
    console.log("close nav");
    this.classSearch = 'customNav'
    this.toggleEvent.emit(this.classSearch)
    
  }

  getsearchinfo(data:any)
  {
    console.log(data.value.keyword);
    if(data.value.keyword.length!="")
    {
    this.apiSer.eventSearch(data.value.keyword).subscribe((res:any)=>{
      // console.log(res);
      this.apiSer.setSearchEvent(res);
      data.reset(); 
    },(err)=>console.log(err))
  }
  else{

  }
  }
}
