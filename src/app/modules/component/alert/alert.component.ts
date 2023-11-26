import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private locations:Location) { }

  ngOnInit(): void {
  }

  goesBack()
  {
    this.locations.back();
  }
}
