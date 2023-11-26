import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/modules/shared/services/api.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css'],

})
export class EditJobComponent implements OnInit {

  public jobEditForm: FormGroup;

  jobId: any;
  jobdata: any;

  month = new Date().getMonth() + 1
  todaysDate = new Date().getFullYear() + '/' + this.month + '/' + new Date().getDate();

  constructor(private router: Router, private formBuilder: FormBuilder, private apiSer: ApiService, private location: Location, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.jobEditForm = this.formBuilder.group({
      Id: new FormControl(),
      JobType: new FormControl(''),
      JobPost: new FormControl(''),
      CompanyName: new FormControl(''),
      CompanyEmail: new FormControl(''),
      Department: new FormControl(''),
      CompanyImage: new FormControl(''),
      PostedBy: new FormControl(''),
      Salary: new FormControl(''),
      Description: new FormControl(''),
      About: new FormControl(''),
      State: new FormControl(''),
      City: new FormControl(''),
      Experience: new FormControl(''),
      isapplied: [true],
      Date: [this.todaysDate],
    });

    this.activatedRoute.queryParamMap.subscribe(data => {
      this.jobId = data.get('id');
    });
    this.apiSer.getJobDetailsById(this.jobId).subscribe((res: any) => {
      console.log(res);
      this.jobdata = res;
      this.jobEditForm.patchValue({
        Id: res.Id,
        JobPost: res.JobPost,
        Department: res.Department,
        PostedBy: res.PostedBy,
        CompanyName: res.CompanyName,
        CompanyEmail: res.CompanyEmail,
        CompanyImage: res.CompanyImage,
        City: res.City,
        State: res.State,
        Date: this.todaysDate,
        Salary: res.Salary,
        JobType: res.JobType,
        Experience: res.Experience,
        Description: res.Description,
        About: res.About,
        isapplied: true
      })

    })

  }

  updateJobDetails() {
    this.apiSer.upadteJobById(this.jobEditForm.value).subscribe((result) => {
      console.log(result)
      this.toastr.success("Job Edited Successfully.");
      this.location.back();
    });

    console.log("Job Form", this.jobEditForm.value)
  }

  goBack() {
    this.location.back();
  }
}
