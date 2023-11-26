import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { News1RoutingModule } from './news1-routing.module';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { MenuComponent } from 'src/app/component/layout/menu/menu.component';
// import { FooterComponent } from 'src/app/component/layout/footer/footer.component';


@NgModule({
  declarations: [NewslistComponent, NewsdetailComponent ,MenuComponent],
  imports: [
    CommonModule,
    News1RoutingModule,
    

  ]
  
})
export class News1Module { }
