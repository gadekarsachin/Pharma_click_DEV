import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRoutingModule } from './job-routing.module';
import { JoblistComponent } from './joblist/joblist.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyJobComponent } from './apply-job/apply-job.component';

@NgModule({
  declarations: [JoblistComponent, JobdetailsComponent, JobpostComponent, EditJobComponent, ApplyJobComponent],
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class JobModule { }
