import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  path:any;
  

  constructor() { }

  ngOnInit(): void {
    this.path = window.location.pathname;
  }

}
