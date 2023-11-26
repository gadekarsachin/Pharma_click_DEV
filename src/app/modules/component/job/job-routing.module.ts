import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'joblist',
    pathMatch: 'full'
  },

  {
    path: 'joblist',
    component: JoblistComponent
  },

  {
    path: 'jobdetail',
    component: JobdetailsComponent
  },

  {
    path: 'jobpost',
    component: JobpostComponent
  },
  {
    path: 'editJob',
    component: EditJobComponent
  },
  {
    path: 'applyJob',
    component: ApplyJobComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JobRoutingModule { }
