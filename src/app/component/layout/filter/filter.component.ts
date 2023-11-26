import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterList:string;
  @Output() toggleEvent = new EventEmitter<string>();

  public filterListVal:string = 'b2b';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  closeNav(){
    this.filterList = 'customNav'
    this.toggleEvent.emit(this.filterList)
  }
  profile(){
    this.closeNav();
  }

  onBusiness(){
    this.filterListVal = 'b2b'
  }
  onJobs(){
    this.filterListVal = 'jobs'
  }
  onNews(){
    this.filterListVal = 'news'
  }
  onEvents(){
    this.filterListVal = 'events'
  }
  onBlogs(){
    this.filterListVal = 'blogs'
  }
  onProfile(){
    this.filterListVal = 'profile'
  }
  onTest(){
    this.filterListVal = 'test'
  }
  candidateList(){
    this.router.navigate(['home/company/candidates']);
    this.closeNav();
  }
}
