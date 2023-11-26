import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})

export class JobpostComponent implements OnInit {
  // type form
  public jobPostForm: FormGroup;

  // type date
  month = new Date().getMonth() + 1
  todaysDate = new Date().getFullYear() + '/' + this.month + '/' + new Date().getDate();

  // type any
  base64textString: any = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private apiSer: ApiService, private toastr: ToastrService, private location: Location) { }

  ngOnInit(): void {
    this.jobPostForm = this.formBuilder.group({
      JobPost: [null, [Validators.required]],
      Department: [null, [Validators.required]],
      PostedBy: [null, [Validators.required]],
      CompanyName: [null, [Validators.required]],
      CompanyEmail: [null, [Validators.required]],
      CompanyImage: [null],
      //Rating: ['NA'],
      // Location: [null],
      City: [null, [Validators.required]],
      State: [null, [Validators.required]],
      Date: [this.todaysDate],
      Salary: [null, [Validators.required]],
      JobType: [null, [Validators.required]],
      Experience: [null, [Validators.required]],
      Description: [null],
      About: [null],
      isapplied: [true]
    });
  };

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    // this.base64textString = 'data:image/png;base64,' + btoa(e.target.result);
    this.base64textString = btoa(e.target.result);
  }
  submitForm() {
    if (this.jobPostForm.valid) {
      this.jobPostForm.value['CompanyImage'] = (this.base64textString);
      this.jobPostForm.value['Id'] = 0;
      this.jobPostForm.value['CompanyId'] = JSON.parse(localStorage.getItem("token")).CompanyId;
      this.apiSer.jobPost(this.jobPostForm.value).subscribe(() => {
        this.toastr.success("Job Post submitted successfully! The Post will be published within 24 hours.", '', {
          positionClass: 'toast-center'
        });
        this.cancleForm();
      });
    }
    else {
      this.toastr.error("Please Enter all fields")
    }
  }


  cancleForm() {
    this.jobPostForm.reset();
    this.jobPostForm.controls['Date'].setValue(this.todaysDate);
    this.jobPostForm.controls['Rating'].setValue('NA');
    this.router.navigate(['/job']);
  }

  goBack() {
    this.location.back();
  }

}
