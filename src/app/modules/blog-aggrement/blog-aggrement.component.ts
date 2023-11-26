import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-aggrement',
  templateUrl: './blog-aggrement.component.html',
  styleUrls: ['./blog-aggrement.component.css']
})
export class BlogAggrementComponent implements OnInit {

  constructor(private locations:Location) { }

  ngOnInit(): void {
  }
  goesBack()
  {
    this.locations.back();
  }

}
