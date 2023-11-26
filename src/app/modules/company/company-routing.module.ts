import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './component/company-detail/company-detail.component';
import { CompanyInfoComponent } from './component/company-info/company-info.component';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { SearchCandidateComponent } from './component/search-candidate/search-candidate.component';


const routes: Routes = [

  {
    path: 'company-details',
    component: CompanyDetailComponent
  },
  {
    path: 'lists',
    component: CompanyListComponent
  },
  {
    path: 'candidates',
    component: SearchCandidateComponent
  },
  {
    path: 'company-info',
    component: CompanyInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
