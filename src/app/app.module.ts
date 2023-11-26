import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { NoAccessComponent } from './component/layout/no-access/no-access.component';
import { NotFoundComponent } from './component/layout/not-found/not-found.component';
import { HomeComponent } from './modules/component/home/home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './modules/component/profile/profile.component';
import { EventComponent } from './modules/component/event/event.component';
import { FilterComponent } from './component/layout/filter/filter.component';
import { FilterListComponent } from './component/layout/filter-list/filter-list.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { BlogsComponent } from './modules/component/blogs/blogs.component';
import { ToastrModule } from 'ngx-toastr';

import { MainSliderComponent } from './component/layout/main-slider/main-slider.component';
import { AdvSliderComponent } from './component/layout/adv-slider/adv-slider.component';
import { SearchComponent } from './component/layout/search/search.component';
import { CompanyDataComponent } from './component/company-data/company-data.component';
import { NewslistComponent } from './modules/component/news1/newslist/newslist.component';
import { NewsdetailComponent } from './modules/component/news1/newsdetail/newsdetail.component';
import { Header1Component } from './component/layout/header1/header1.component';
import { EventsRoutingModule } from './modules/component/events/events-routing.module';
import { EventListComponent } from './modules/component/events/event-list/event-list.component';
import { EventDetailsComponent } from './modules/component/events/event-details/event-details.component';
// import { TimeAgoPipe } from 'time-ago-pipe';
import { BlogsListComponent } from './modules/component/blogs1/blogs-list/blogs-list.component';
import { BlogsDetailsComponent } from './modules/component/blogs1/blogs-details/blogs-details.component';
import { AuthorInfoComponent } from './modules/component/blogs1/author-info/author-info.component';
import { Blogs1RoutingModule } from './modules/component/blogs1/blogs1-routing.module';
import { NotificationComponent } from './component/layout/notification/notification.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './component/layout/homepage/homepage.component';
import { SearchNewsComponent } from './component/layout/search-news/search-news.component';
import { AllInfoComponent } from './modules/component/all-info/all-info.component';
import { SearchEventComponent } from './component/layout/search-event/search-event.component';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { LoginComponent } from './modules/authentication/component/login/login.component';
import { RegisterComponent } from './modules/authentication/component/register/register.component';
import { ContactusComponent } from './modules/component/contactus/contactus.component';
import { PrivacyPolicyComponent } from './modules/component/privacy-policy/privacy-policy.component';
import { GetSavedItemComponent } from './modules/component/get-saved-item/get-saved-item.component';
import { SearchBlogsComponent } from './component/layout/search-blogs/search-blogs.component';
import { AllSectionPageComponent } from './component/layout/all-section-page/all-section-page.component';
import { AlertComponent } from './modules/component/alert/alert.component';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { JoblistComponent } from './modules/component/job/joblist/joblist.component';
import { JobdetailsComponent } from './modules/component/job/jobdetails/jobdetails.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { ChatCompoComponent } from './modules/chat/chat-compo/chat-compo.component';
import { SocketioService } from './modules/shared/socketio.service';
import { MenuComponent } from './component/layout/menu/menu.component';
import { BlogPostComponent } from './modules/component/blogs1/blog-post/blog-post.component';
import { JobpostComponent } from './modules/component/job/jobpost/jobpost.component';
import { BlogAggrementComponent } from './modules/blog-aggrement/blog-aggrement.component';
import { ShareModalComponent } from './component/layout/share-modal/share-modal.component';
import { ApplyJobComponent } from './modules/component/job/apply-job/apply-job.component';
import { EditJobComponent } from './modules/component/job/edit-job/edit-job.component';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NoAccessComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    EventComponent,
    FilterComponent,
    FilterListComponent,
    FooterComponent,
    BlogsComponent,
    MainSliderComponent,
    AdvSliderComponent,
    SearchComponent,
    CompanyDataComponent,
    NewslistComponent,
    NewsdetailComponent,
    Header1Component,
    EventListComponent,
    EventDetailsComponent,
    BlogsListComponent,
    BlogsDetailsComponent,
    AuthorInfoComponent,
    NotificationComponent,
    HomepageComponent,
    SearchNewsComponent,
    AllInfoComponent,
    SearchEventComponent,
    ContactusComponent,
    PrivacyPolicyComponent,
    GetSavedItemComponent,
    SearchBlogsComponent,
    AllSectionPageComponent,
    AlertComponent,
    JoblistComponent,
    JobdetailsComponent,
    JobpostComponent,
    ScrollSpyDirective,
    ChatCompoComponent,
    BlogPostComponent,
    BlogAggrementComponent,
    ShareModalComponent,
    ApplyJobComponent,
    EditJobComponent
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    EventsRoutingModule,
    Blogs1RoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      maxOpened: 0
    }),
  ],
    // ShareIconsModule,
    // ShareButtonsModule

  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    HomeComponent, FooterComponent, Header1Component,
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
