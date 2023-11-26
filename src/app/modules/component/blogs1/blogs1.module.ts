import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blogs1RoutingModule } from './blogs1-routing.module';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AppModule } from '../../../app.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BlogPostComponent } from './blog-post/blog-post.component';
// import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [BlogsListComponent, BlogsDetailsComponent, AuthorInfoComponent, BlogPostComponent,],
  imports: [
    CommonModule,
    Blogs1RoutingModule,
    // CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule

  ]
})
export class Blogs1Module { }
