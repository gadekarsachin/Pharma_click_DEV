import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';

declare var window: any;
declare var $: any;


@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  // type : form
  jobApplyForm: FormGroup;
  companyId: number;
  // type: any 
  jobListArray: any = [];
  base64textString: any = '';
  searchValue: any;
  role: any;
  showApplyJobBtn: boolean = false;
  showPostJobBtn: boolean = false;

  // type: boolean
  isSubmitted: boolean = false;
  banner: any;

  constructor(private formBuilder: FormBuilder, private apiSer: ApiService, private route: Router,
    private apiService: ApiService) {
    this.companyId = JSON.parse(localStorage.getItem("token")).CompanyId;
  }

  ngOnInit(): void {
    this.showApplyJobBtn = JSON.parse(localStorage.getItem("token")).UserRole == 'Guest' ? true : false;
    this.showPostJobBtn = JSON.parse(localStorage.getItem("token")).UserRole == 'Company' ? true : false;
    this.jobApplyForm = this.formBuilder.group({
      to: [{ value: JSON.parse(localStorage.getItem("token")).Email, disabled: true }],
      attachment: [null, [Validators.required]],
      body: [null, [Validators.required]],
    });
    //   window.PreviewAnyFile.previewBase64(
    //     win => console.log("open status",win),
    //     error => console.error("open failed", error),
    //     'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G',{mimeType:'application/pdf'}
    // );

    this.apiService.viewsBannerImg().subscribe((res: any) => {
      this.banner = res;
    }, (err) => console.log(err))

    $('#toggleBtn').click(function () {
      $('#box1').toggle();
    });

    $('#toggleBtnLoc').click(function () {
      $('#box2').toggle();
    });
    $('#toggleCmp').click(function () {
      $('#box3').toggle();
    });

    this.jobList();
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString = 'data:image/png;base64,' + btoa(e.target.result);
  }

  ApplyJob() {
    this.isSubmitted = true;

    let localEmail = JSON.parse(localStorage.getItem('token'));

    let json = {
      "To_Email": this.jobApplyForm.getRawValue().to,
      "From_Email": localEmail.Email,
      "Subject": this.jobApplyForm.value.body,
      "Body": this.jobApplyForm.value.body,
      "Attachment": this.base64textString,
      "AttachmentName": this.jobApplyForm.value.attachment
    }

    if (this.jobApplyForm.valid) {
      this.apiSer.applyJobPostSendEmail(json).subscribe(result => {
        this.isSubmitted = false;
        $('#applyModal').modal('hide');
      });
    }
  }

  searchJobs() {
    if (this.searchValue != '') {
      this.apiSer.getJobsSearch(this.searchValue).subscribe(result => {
        this.jobListArray = result;
      }, (err) => {
        if (err.status == 404) {
          this.jobListArray = [];
        }
      });
    } else {
      this.jobList();
    }

  }

  jobbyid(id: any) {
    this.route.navigate(['job/jobdetail'], { queryParams: { id: id } });
  }

  jobList() {
    this.apiSer.getJobsList().subscribe(result => {
      this.jobListArray = result;
    });
  }
}
