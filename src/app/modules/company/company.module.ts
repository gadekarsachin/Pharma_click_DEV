import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { CompanyDetailComponent } from './component/company-detail/company-detail.component';
import { SearchCandidateComponent } from './component/search-candidate/search-candidate.component';
import { CompanyInfoComponent } from './component/company-info/company-info.component';


@NgModule({
  declarations: [CompanyListComponent, CompanyDetailComponent, SearchCandidateComponent, CompanyInfoComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  exports: [
    CompanyDetailComponent
  ]
})
export class CompanyModule { }
