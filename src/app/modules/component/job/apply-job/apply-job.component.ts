import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  jobApplyForm: FormGroup;
  CompanyemailId: any;
  isSubmitted: boolean = false;
  base64textString: any = '';
  jobId: any

  constructor(private formBuilder: FormBuilder, private location: Location, private apiSer: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.JobApplyForm()
    this.JobData();
  }

  //Job Apply From Group [yash]
  JobApplyForm() {
    this.jobApplyForm = this.formBuilder.group({
      to: [{ value: this.CompanyemailId, disabled: true }],
      from: [{ value: JSON.parse(localStorage.getItem("token")).Email, disabled: true }],
      Subject: [{ value: 'Job Apply from: ' + JSON.parse(localStorage.getItem("token")).Email, disabled: true }],
      // cc: [{ value: JSON.parse(localStorage.getItem("token")).Email, disabled: true }],
      attachment: [null, [Validators.required]],
      body: [null, [Validators.required]],
    });
  }

  //Get Job Data Based On Job Id [yash]
  JobData() {

    this.activatedRoute.queryParamMap.subscribe(data => {
      this.jobId = data.get('id');
    });

    this.apiSer.getJobDetailsById(this.jobId).subscribe((res: any) => {
      console.log(res);
      this.CompanyemailId = res.CompanyEmail
    }, (err) => console.log(err))
  }

  //For File 
  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = btoa(e.target.result);
  }

  //Go Back to previous page 
  goBack() {
    this.location.back();
  }

  //Apply for Job
  ApplyJob() {
    this.isSubmitted = true;

    let localEmail = JSON.parse(localStorage.getItem('token'));

    let json = {
      "To_Email": this.CompanyemailId,
      "CC_Email": localEmail.Email,
      "From_Email": localEmail.Email,
      "Subject": 'Job Apply from: ' + JSON.parse(localStorage.getItem("token")).Email,
      "Body": this.jobApplyForm.value.body,
      "Attachment": this.base64textString,
      "AttachmentName": this.jobApplyForm.value.attachment
    }

    if (this.jobApplyForm.valid) {
      this.apiSer.applyJobPostSendEmail(json).subscribe((result: any) => {

        // this.toastr.success("Job applied Successfully.");
        this.isSubmitted = false;
        this.goBack()
      });
      console.log('apply job', json)
    }
  }
}
