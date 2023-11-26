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

  // type: any 
  jobListArray: any = [];
  base64textString: any = '';
  searchValue: any;

  // type: boolean
  isSubmitted: boolean = false;
  banner:any;

  constructor(private formBuilder: FormBuilder, private apiSer: ApiService, private route: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {

    this.jobApplyForm = this.formBuilder.group({
      to: [{ value: 'info@pharmaclick.co.in', disabled: true }],
      attachment: [null, [Validators.required]],
      body: [null, [Validators.required]],
    });
    //   window.PreviewAnyFile.previewBase64(
    //     win => console.log("open status",win),
    //     error => console.error("open failed", error),
    //     'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G',{mimeType:'application/pdf'}
    // );

    this.apiService.viewsBannerImg().subscribe((res:any)=>{
      console.log(res);
      this.banner=res;
    },(err)=>console.log(err))

    $('#toggleBtn').click(function () {
      $('#box1').toggle();
    });

    $('#toggleBtnLoc').click(function () {
      $('#box2').toggle();
    });
    $('#toggleCmp').click(function () {
      $('#box3').toggle();
    });

    this.apiSer.getJobsList().subscribe(result => {
      console.log("Job Posted Successfully", result);
      this.jobListArray = result;
    });
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

    console.log(json);
    if (this.jobApplyForm.valid) {
      this.apiSer.applyJobPostSendEmail(json).subscribe(result => {
        console.log("Job Applied Successfully", result);
        this.isSubmitted = false;
        $('#applyModal').modal('hide');
      });
    }
  }

  searchJobs() {
    this.apiSer.getJobsSearch(this.searchValue).subscribe(result => {
      console.log("Job Posted Successfully", result);
      this.jobListArray = result;
    });
  }

  jobbyid(id: any) {
    console.log("id===", id);
    this.route.navigate(['job/jobdetail'], { queryParams: { id: id } });
  }

}
