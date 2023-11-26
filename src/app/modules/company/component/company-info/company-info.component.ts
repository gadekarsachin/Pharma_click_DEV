import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyId = 0;
  companyData: Product;
  public classList:string = "";
  constructor(private activatedRoute:ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.companyId = data['id'];
    })

    this.apiService.viewCompanyData(this.companyId).subscribe(viewData =>{
      this.companyData = viewData;
    })
  }

  openMenu(){
    this.classList = 'nav--open'
  }
}

