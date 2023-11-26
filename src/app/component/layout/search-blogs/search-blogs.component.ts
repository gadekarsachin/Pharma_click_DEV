import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-search-blogs',
  templateUrl: './search-blogs.component.html',
  styleUrls: ['./search-blogs.component.css']
})
export class SearchBlogsComponent implements OnInit {

  @Input() classSearch1:any;
  @Output() toggleEvent = new EventEmitter<string>();

  constructor(private apiSer:ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  closesearch(){
    this.classSearch1 = 'customNav'
    this.toggleEvent.emit(this.classSearch1)
  }

  findBlogs(data:any)
  {
    console.log(data.value.keyText);   

    // if((data.value.keyText.length!=""))
    // {
    this.apiSer.SearchBlogs(data.value.keyText).subscribe((res:any)=>{
      console.log(res);
      this.apiSer.setSearchBlogs(res);
      // this.router.navigate(['blogs/blogslist']);
      data.reset(); 
    },(err)=>console.log(err))

    // data.reset();  // Reset all form data
    // return false;

    // }
    // else
    // {
    //   console.log("textbox is empty 1");
    // }
    

   
  }

}
