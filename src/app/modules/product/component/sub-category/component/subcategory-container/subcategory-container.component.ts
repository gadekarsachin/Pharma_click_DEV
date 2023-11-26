import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory-container',
  templateUrl: './subcategory-container.component.html',
  styleUrls: ['./subcategory-container.component.scss']
})
export class SubcategoryContainerComponent implements OnInit {
  subCategory: any[] = [
    { catId: 1, title: "Vitamin", url: "assets/images/10.jfif" },
    { catId: 2, title: "Heat Exchanger", url: "assets/images/11.png" },
    { catId: 3, title: "Nucleic Acid", url: "assets/images/12.png" },
    { catId: 4, title: "Air Purification", url: "assets/images/13.jfif" },
    { catId: 5, title: "Custom Purification and Seperation", url: "assets/images/14.jfif" },
    { catId: 6, title: "Gas Treatment", url: "assets/images/15.jfif" },
    { catId: 7, title: "Regulated Fine Chemicals", url: "assets/images/16.jfif" },
    { catId: 8, title: "Pumps", url: "assets/images/17.jfif" },
    { catId: 9, title: "Testing Instrument", url: "assets/images/18.jfif" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
