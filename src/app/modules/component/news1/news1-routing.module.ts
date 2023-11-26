import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { NewslistComponent } from './newslist/newslist.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'Newslist',
    pathMatch:'full'
  },
  {
    path:'Newslist',
    component:NewslistComponent
  },
  
  {
    path:'Newsdetail',
    component:NewsdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
  ]
})
export class News1RoutingModule { }
