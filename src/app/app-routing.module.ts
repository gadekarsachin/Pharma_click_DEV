import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CompanyDataComponent } from './component/company-data/company-data.component';
import { AdvSliderComponent } from './component/layout/adv-slider/adv-slider.component';
import { AllSectionPageComponent } from './component/layout/all-section-page/all-section-page.component';
import { HomepageComponent } from './component/layout/homepage/homepage.component';
import { MainSliderComponent } from './component/layout/main-slider/main-slider.component';
import { NoAccessComponent } from './component/layout/no-access/no-access.component';
import { NotFoundComponent } from './component/layout/not-found/not-found.component';
import { NotificationComponent } from './component/layout/notification/notification.component';
import { ChatCompoComponent } from './modules/chat/chat-compo/chat-compo.component';
import { AlertComponent } from './modules/component/alert/alert.component';
import { AllInfoComponent } from './modules/component/all-info/all-info.component';
import { BlogsComponent } from './modules/component/blogs/blogs.component';
import { ContactusComponent } from './modules/component/contactus/contactus.component';
import { GetSavedItemComponent } from './modules/component/get-saved-item/get-saved-item.component';
import { HomeComponent } from './modules/component/home/home.component';
import { PrivacyPolicyComponent } from './modules/component/privacy-policy/privacy-policy.component';

import { ProfileComponent } from './modules/component/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  
  {
    path:'auth',
    loadChildren: () => import('./modules/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
  },
  {
    path:'homepage',
    component: HomepageComponent
  },
  {
    path: 'allnews/Newslist',
    canActivate:[AuthenticationGuard],
    redirectTo: 'Newslist',
    pathMatch: 'full'
  },
  {
    path:'allnews',
    loadChildren:()=>import('./modules/component/news1/news1-routing.module').then(m=>m.News1RoutingModule)
  },
  
  {
    path:'profile',
    component: ProfileComponent
  },
 {
  path:'contact',
  component:ContactusComponent
 },
 {
  path:'privacyPolicy',
  component:PrivacyPolicyComponent
 },
 {
  path:'alert',
  component:AlertComponent
 },
 {
  path:'GetSaveItem/:SavedItem',
  component:GetSavedItemComponent
 },

  // {
  //   path:'event',
  //   component: EventComponent
  // }, 
  {
    path: 'events/event-list',
    canActivate:[AuthenticationGuard],
    redirectTo: 'event-list',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren:()=>import('./modules/component/events/events-routing.module').then(m=>m.EventsRoutingModule)
  },
  {
    path: 'blogs/bloglist',
    canActivate:[AuthenticationGuard],
    redirectTo: 'bloglist',
    pathMatch: 'full'
  },
  {
    path:'blogs',
    // canActivate:[AuthenticationGuard],
    loadChildren:()=>import('./modules/component/blogs1/blogs1-routing.module').then(m=>m.Blogs1RoutingModule)
  },
  {
    path: 'job/joblist',
    canActivate:[AuthenticationGuard],
    redirectTo: 'joblist',
    pathMatch: 'full'
  },
  {
    path:'job',
    loadChildren:()=>import('./modules/component/job/job-routing.module').then(m=>m.JobRoutingModule)
  },

  // {
  //   path:'blogs',
  //   component:BlogsComponent
  // },
 
  {
    path:'allinfo',
    component:AllInfoComponent
  },
  {
    path: 'all-section',
    component: AllSectionPageComponent
  },
  {
    path:'mainSlider',
    component:MainSliderComponent
  },
  {
    path:'advSlider',
    component:AdvSliderComponent
  },
  {
    path: 'company-data',
    component: CompanyDataComponent
  },
  {
    path:'notifications',
    component:NotificationComponent
  },
  {
    path:  'chat',
    component: ChatCompoComponent
  },
  {
    path:'home',
    canActivate:[AuthenticationGuard],
    component: HomeComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'suppliers',
        loadChildren: () => import('./modules/suppliers/suppliers.module').then(m => m.SuppliersModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      
     
      {
        path:'no-access',
        component:NoAccessComponent
      },
      {
        path:'not-found',
        component:NotFoundComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
