import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';
// import { ToastrService } from 'ngx-toastr';

declare var window: any;
declare var $: any;


@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  // type : form
  CompanyemailId: any;
  jobApplyForm: FormGroup;
  companyId: number;
  share1:any;
  // type: any 
  jobListArray: any = [];
  base64textString: any = '';
  searchValue: any;
  role: any;
  profileName: any;
  profileData: any;
  path1: any;
  classMenu: any;
  public classSearch1: string = "";
  showApplyJobBtn: boolean = false;
  showPostJobBtn: boolean = false;
  // type: boolean
  isSubmitted: boolean = false;
  banner: any;
  activeClass: any;
  public userData: any;
  allJobsSaved: any = [];
  allSavedJobs: any = [];
  public savedJobs: boolean = false;
  postedby: any
  filterLocation: any
  department: any
  companyName: any
  jobType: any
  salary: any
  exp: any
  noJobs = false
  dataArr: any = [];

  constructor(private formBuilder: FormBuilder, private apiSer: ApiService, private route: Router,
    private apiService: ApiService,private sanitizer: DomSanitizer) {
    var today = new Date();

    var month = today.toLocaleString('default', { month: 'short' });
    var year = today.getFullYear();
    var shortYear = year.toString().substr(-2);

    this.activeClass = month.toUpperCase() + "-" + shortYear;
    var monthCount = today.getMonth();
    localStorage.setItem('currMonth', JSON.stringify(this.activeClass));
    console.log("currMonth", this.activeClass);
    this.companyId = JSON.parse(localStorage.getItem("token")).CompanyId;
  }
  
  // constructor(private formBuilder: FormBuilder, private apiSer: ApiService, private route: Router,
  //   private apiService: ApiService) {
  //   this.companyId = JSON.parse(localStorage.getItem("token")).CompanyId;
  // }

  ngOnInit(): void {
    this.path1 = window.location.pathname;
    this.showApplyJobBtn = JSON.parse(localStorage.getItem("token")).UserRole == 'Guest' ? true : false;
    this.showPostJobBtn = JSON.parse(localStorage.getItem("token")).UserRole == 'Company' ? true : false;
    this.profileData = JSON.parse(localStorage.getItem('token'));
    this.profileName = this.profileData.FirstName +" "+this.profileData.LastName;

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
    this.userData = JSON.parse(localStorage.getItem('token'));
    // var s = JSON.parse(tokens);
    this.dataArr.push(this.userData);
    // console.log("currently login user id",this.dataArr[0].CompanyId)
    this.apiSer.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res: any) => {
      // this.base64textString = res.FileContents; 
      this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);
    });

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



    this.profileData = JSON.parse(localStorage.getItem('token'));
    this.profileName = this.profileData.FirstName + " " + this.profileData.LastName;
    $('.feat-btn').click(function () {
      $('.nav__links ul .feat-show').toggleClass("show");
      $('.nav__links ul .first').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });

    $('.feat-btn1').click(function () {
      $('.nav__links ul .feat-show1').toggleClass("show1");
      $('.nav__links ul .first1').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
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
    // 'data:image/png;base64,' +
    this.base64textString = btoa(e.target.result);
  }
  getId(id) {
    // this.jobApplyForm = this.formBuilder.group({
    //   to: [{ value: JSON.parse(localStorage.getItem("token")).Email, disabled: true }],
    //   attachment: [null, [Validators.required]],
    //   body: [null, [Validators.required]],
    // });
    // this.apiService.viewAllCompanyinfo(id).subscribe((res: any) => {
    //   // this.companyData=res;
    //   console.log(".....s...s..", res)
    //   this.CompanyemailId = res.Email;
    // });
    this.route.navigate(['job/applyJob'], { queryParams: { id: id } });
  }
  ApplyJob() {
    this.isSubmitted = true;

    let localEmail = JSON.parse(localStorage.getItem('token'));

    let json = {
      "To_Email": this.CompanyemailId,
      "CC_Email": "info@pharmaclick.co.in",
      // "CC_Email": this.jobApplyForm.value.
      "From_Email": localEmail.Email,
      "Subject": this.jobApplyForm.value.body,
      "Body": this.jobApplyForm.value.body,
      "Attachment": this.base64textString,
      "AttachmentName": this.jobApplyForm.value.attachment
    }

    if (this.jobApplyForm.valid) {
      // this.toastr.success("Job applied Successfully.");
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
  filterJob() {
    if (this.postedby != '' || this.filterLocation != '' || this.department != '' || this.companyName != '' || this.jobType != '' || this.salary != '' || this.exp != '') {
      this.apiSer.filterJobs(this.companyId, this.filterLocation, this.postedby, this.department, this.companyName, this.jobType, this.salary, this.exp).subscribe((res) => {
        this.jobListArray = res
      })
    }
    else {
      this.jobList()
      this.noJobs = true
    }
  }
  
  clearFilters() {
    this.postedby = '';
    this.filterLocation = ''
    this.companyName = ''
    this.department = ''
    this.jobType = ''
    this.salary = ''
    this.exp = ''
    this.jobList()
  }


  moveToPrivacy() {
    this.route.navigate(['/privacyPolicy']);
  }
  logout() {
    console.log("logout");
    sessionStorage.setItem('redirectUrl', 'null');
    localStorage.removeItem('token');
    this.route.navigate(['/auth/login']);
  }
  openMenu() {
    this.classMenu = 'nav--open';
    document.getElementById("sideNavCloseE").style.display = "block";

  }
  closeMenu() {
    this.classMenu = 'customNav'
    // this.toggleEvent.emit(this.classSearch)
  }
  closeNav() {
    document.getElementById("sideNavCloseE").style.display = "none";
  }

  openSearch() {
    this.classSearch1 = 'nav--open'
  }
  receiveSearchMesg(event: any) {
    console.log('event is :', event);
    this.classSearch1 = event;
  }

  jobbyid(id: any) {
    this.route.navigate(['job/jobdetail'], { queryParams: { id: id } });
  }
  editJob(id: any) {
    this.route.navigate(['job/editJob'], { queryParams: { id: id } });
  }
  
  deleteJob(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiSer.deleteJobById(id).subscribe(() => {
          this.jobList()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  
  // jobList() {
  //   this.apiSer.getJobsList().subscribe(result => {
  //     this.jobListArray = result;
  //   });
  // }

  share(i:any){
    console.log(i)
    this.share1=i;
  }

  jobList() {
    this.apiSer.getJobsList().subscribe((result: any) => {
      //Job Image [Yash]
      this.apiSer.viewJobsImage(0, 5).subscribe((data: any) => {
        result.CompanyImage = data.CompanyImage
        for (let i = 0; i < result.length; i++) {

          result[i].CompanyImage = data[i].CompanyImage;

        }
      })
      // console.log(result)
      this.jobListArray = result;
      console.log(this.jobListArray)
    });
  }
  saveJobs(variab: any) {
    var remoovedId;
    this.allJobsSaved.forEach((ele) => {
      if (ele.ItemId === variab.Id) {
        remoovedId = ele.Id;
      }
    });

    if (this.allSavedJobs.includes(variab.Id)) {
      this.apiService.deleteSavedItem(remoovedId).subscribe((data) => {
        this.apiService
          .viewAllSavedNews(this.userData.CompanyId, 'JobPost')
          .subscribe(
            (res: any) => {
              this.allSavedJobs = [];
              res.GetJobPost.forEach((ele) => {
                this.allSavedJobs.push(ele.Id);

              });
            },
            (err) => console.log(err)
          );
        this.apiService.savedItems(this.userData.CompanyId, 'JobPost').subscribe(
          (res: any) => {
            this.allJobsSaved = res;

          },
          (err) => console.log(err)
        );
      });
    } else {
      this.allSavedJobs.push(variab.Id);
      console.log(this.allSavedJobs)
      var objs = {
        UserId: this.userData.CompanyId,
        ItemName: 'JobPost',
        ItemId: variab.Id,
      };

      this.apiService.saveBlogs(objs).subscribe(() => {
        // this.savaEventData =data;
        // console.log("res",data);
        this.savedJobs = true;
        this.apiService.savedItems(this.userData.CompanyId, 'JobPost').subscribe(
          (res: any) => {
            this.allJobsSaved = res;
          },
          (err) => console.log(err)
        );
      });
    }
  }
}
