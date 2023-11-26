import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public upComingEve:string = 'para1 highlight';
  public pastEve:string = 'para2'
  public eventStatus:string = 'No Upcoming Event'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backButton(){
    this.router.navigate(['/home/product/category'])
  }
  onUpcoming(){
    this.eventStatus = 'No Upcoming Event'
    this.upComingEve = 'para1 highlight'
    this.pastEve = 'para2'
  }
  onPastEve(){
    this.eventStatus = 'No Past Events'
    this.upComingEve = 'para1'
    this.pastEve = 'para2 highlight'
  }
}
