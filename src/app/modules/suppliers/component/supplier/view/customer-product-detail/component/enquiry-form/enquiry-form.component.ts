import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(){
  //  this.router.navigate([''])
  }

}
