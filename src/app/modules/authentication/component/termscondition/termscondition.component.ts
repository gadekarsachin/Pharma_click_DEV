import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-termscondition',
  templateUrl: './termscondition.component.html',
  styleUrls: ['./termscondition.component.css']
})
export class TermsconditionComponent implements OnInit {

  constructor(private locations:Location) { }

  ngOnInit(): void {
  }
  goesBack()
  {
    this.locations.back();
  }

}
