import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  activeClass: any = "homepage";
  var1: any;
  constructor() { }

  ngOnInit(): void {

    // $(document).ready(function(){
    //   $('nav a').click(function(){
    //     $('a').removeClass("active");
    //     $(this).addClass("active");
    //     console.log('add');
    // });
    // });

    this.var1 = window.location.pathname;
  }



}
