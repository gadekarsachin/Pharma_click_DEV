import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogAggrementComponent } from '../../blog-aggrement/blog-aggrement.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'blogslist',
    pathMatch:'full'
  },
  
  {
    path:'blogslist',
    component:BlogsListComponent
  },
  {
    path:'writeblogs',
    component:BlogPostComponent
  },
  {
    path:'blogsdetail',
    component:BlogsDetailsComponent
  },
  {
    path:'author',
    component:AuthorInfoComponent
  },
  {
    path:'blogagreement',
    component:BlogAggrementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blogs1RoutingModule { }
