import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Blogs } from 'src/app/shared/blogs';


@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  share1:any;
  dispayData: any = true;
  totalPagecount: any = 0;
  path1: any;
  public classList: string = "";
  public classSearch1: string = "";
  classMenu: any;
  blogList: any=[];
  wordLimit: number = 14;
  showMore: boolean = false;
  postDateTime1: any;
  name = "ng2-ckeditor";
  ckeConfig: any;
  mycontent: string;
  log: string = "";
  @ViewChild("myckeditor") ckeditor: any;
  allBlogSaved: any = [];
  public allSavedBlogs: any = [];
  allSavedEvents: any = [];
  profileData: any;
  public userData: any;
  profileName: any;
  myForm: any;
  isSubmitted: boolean = false;
  getSearchData: any;
  blogimage: any;
  base64textString: any;
  authorImg: any;
  dataArr: any = [];
  // BlogListResponse {

  // }

  constructor(private apiService: ApiService, private route: Router, private fb: FormBuilder,
    private location: Location, private sanitizer: DomSanitizer) {

    if (localStorage.getItem('token')) {
      // return true;
    } else {
      this.route.navigate(['/auth/login']);
    }

    this.mycontent = `<p> Write Your Blogs. </p>`;

  }

  openMenu() {
    this.classMenu = 'nav--open';
    document.getElementById("sideNavClose").style.display = "block";

  }

  closeMenu() {
    this.classMenu = 'customNav'
    // this.toggleEvent.emit(this.classSearch)
  }
  closeNav() {
    document.getElementById("sideNavClose").style.display = "none";
  }

  receiveMessage(event) {
    console.log('event is :', event);
    this.classList = event;
  }


  openSearch() {
    this.classSearch1 = 'nav--open'
  }

  receiveSearchMesg(event: any) {
    console.log('event is :', event);
    this.classSearch1 = event;
  }

  logout() {
    console.log("logout");
    sessionStorage.setItem('redirectUrl', 'null');
    localStorage.removeItem('token');
    this.route.navigate(['/auth/login']);
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result);
      this.blogimage = reader.result;
      console.log(this.blogimage);

    };
  }

  ngOnInit(): void {

    this.path1 = window.location.pathname;

    this.profileData = JSON.parse(localStorage.getItem('token'));
    this.profileName = this.profileData.FirstName + " " + this.profileData.LastName;

    let tokens = JSON.parse(localStorage.getItem('token'));
    // var s = JSON.parse(tokens);
    this.dataArr.push(tokens);
    console.log("currently login user id", this.dataArr[0].CompanyId);

    this.apiService.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res: any) => {
      // this.base64textString = res.FileContents; 
      this.authorImg = res;
      this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);
    });

    // ------search result

    this.apiService.searchBlogNew.subscribe((res: any) => {
      console.log(res);
      let mainDiv = document.getElementById("div1");
      let searchDiv = document.getElementById("div2");

      if (res == null) {
        mainDiv.style.display = "inline";
        searchDiv.style.display = "none";
      }
      else {
        this.getSearchData = res;
        mainDiv.style.display = "none";
        console.log("not empty data");
        searchDiv.style.display = "block";

      }

    }, (err) => console.log(err))


    // ------------------
    $('.feat-btn').click(function () {
      $('.nav__links ul .feat-show').toggleClass("show");
      $('.nav__links ul .first').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });

    $('.feat-btn1').click(function () {
      $('.nav__links ul .feat-show1').toggleClass("show1");
      $('.nav__links ul .first1').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });



    //     document.addEventListener("deviceready", onDeviceReady, false);
    //     function onDeviceReady(){
    //     document.addEventListener("backbutton", function(e) {
    //         e.preventDefault();

    //                 if(confirm("Do you want to exit ?")) {
    //                   (navigator as any).app.exitApp();
    //                 }
    //     }, false);
    // }


    this.apiService.viewBlogs(0, 50).subscribe((res: any) => {
      this.blogList = res.m_Item1;
      for (let i = 0; i < this.blogList.length; i++) {
        this.blogList[i].BlogImglink = this.blogList[i].BlogImglink.replace(this.blogList[i].BlogImglink.substring(this.blogList[i].BlogImglink.indexOf('/api'), this.blogList[i].BlogImglink.indexOf('/media')), '/');
      }
      console.log("res", this.blogList);
    });

    this.dispayData = false;
    setTimeout(() => {
      this.apiService.viewBlogs(0, 5).subscribe((data: any) => {
        this.totalPagecount = data.m_Item2;
        this.apiService.viewBlogsImage(0, 5).subscribe((img: any) => {
          for (let i = 0; i < data.m_Item1.length; i++) {
            data.m_Item1[i].BlogImglink = img.m_Item1[i].BlogImg;
            this.apiService.viewProfilePic(data.m_Item1[i].AuthorId).subscribe((res: any) => {
              this.authorImg = res
              data.m_Item1[i].AuthorImg = this.sanitizer.bypassSecurityTrustResourceUrl(
                `data:image/png;base64 || data:image/jpg;base64, ${res}`);
            })
          }
        });

        console.log("....t.....:", data)
        this.dispayData = true;
        this.blogList = data.m_Item1;
      });
    }, 1000)

  
    $('.btn-toggle').click(function () {
      $(this).find('.btn').toggleClass('active');

      if ($(this).find('.btn-primary').length > 0) {
        $(this).find('.btn').toggleClass('btn-primary');
      }
      if ($(this).find('.btn-danger').length > 0) {
        $(this).find('.btn').toggleClass('btn-danger');
      }
      if ($(this).find('.btn-success').length > 0) {
        $(this).find('.btn').toggleClass('btn-success');
      }
      if ($(this).find('.btn-info').length > 0) {
        $(this).find('.btn').toggleClass('btn-info');
      }

      $(this).find('.btn').toggleClass('btn-default');

    });

    $('form').submit(function () {
      var radioValue = $("input[name='options']:checked").val();
      if (radioValue) {
        alert("You selected - " + radioValue);
      };
      return false;
    });




    $(document).ready(function () {

      let clickedId: any;
      $('.mobile-nav-tab').on("click", function () {
        clickedId = $(this).attr("id");
        $('.mobile-nav-tab').each(function (index) {
          if ($(this).attr("id") == clickedId) {
            $('.mobile-nav-tab,.content-item').eq(index).addClass('active');
            $(".content-item").eq(index).show();
          } else {
            $('.mobile-nav-tab,.content-item').eq(index).removeClass('active');
            $(".content-item").eq(index).hide();
          }
        });
      });


    });



    this.ckeConfig = {
      extraPlugins:
        "easyimage,dialogui,dialog,about,basicstyles,bidi,blockquote,clipboard," +
        "button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu," +
        "contextmenu,dialogadvtab,div,elementspath,enterkey,entities,popup," +
        "filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo," +
        "font,format,forms,horizontalrule,htmlwriter,iframe,image,indent," +
        "indentblock,indentlist,justify,link,list,liststyle,magicline," +
        "maximize,newpage,pagebreak,pastefromword,pastetext,preview,print," +
        "removeformat,resize,save,menubutton,scayt,selectall,showblocks," +
        "showborders,smiley,sourcearea,specialchar,stylescombo,tab,table," +
        "tabletools,templates,toolbar,undo,wsc,wysiwygarea",
      toolbar: [
        { name: 'clipboard', items: ['Undo', 'Redo'] },
        // {name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight']},
        { name: 'insert', items: ['EasyImageUpload'] },
        // {name: 'colors', items: [ 'TextColor','BGColor' ]},

      ]
    };

    let fullName = this.profileData.FirstName + " " + this.profileData.LastName;
    // console.log(fullName);
    this.myForm = this.fb.group({
      Title: ['', [Validators.required]],
      Body: ['', [Validators.required]],
      Tags: ['', [Validators.required]],
      Source: ['', [Validators.required]],
      PublisherName: [fullName],
      AuthorName: ['', [Validators.required]],
      BlogImg: ['', [Validators.required]],

      // AuthorId: [this.profileData.CompanyId]
    });



  }

  shareBloglist() {
    var urlPath = window.location.href;

    var options = {
      message: 'Blog', // not supported on some apps (Facebook, Instagram)

      files: ['', ''], // an array of filenames either locally or remotely
      // url: "https://play.google.com/store/apps/details?id=io.cordova.pharmaClick",
      url: urlPath.replace('https://localhost', 'https://pharmaclick.co.in/web'),
      chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
    };
    var onSuccess = function (result) {
      console.log('Share completed? ' + result.completed); // On Android apps mostly return false even while it's true
      console.log('Shared to app: ' + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function (msg) {
      console.log('Sharing failed with message: ' + msg);
    };

    window['plugins'].socialsharing.shareWithOptions(
      options,
      onSuccess,
      onError
    );

    //  window['plugins'].CallNumber.callNumber(onSuccess, onError, '8460058030', true);
  }

  // {
  //   "Title": "string",
  //   "Body": "string",
  //   "PublisherName": "string",
  //   "AuthorName": "string",
  //   "BlogImg": "string",
  //   "Tags": "string",
  //   "Source": "string"
  // }


  saveBlogsD(variab: any) {
    // console.log("saveE",variab);
    var remoovedId;
    this.allBlogSaved.forEach((ele) => {
      if (ele.ItemId === variab.Id) {
        remoovedId = ele.Id;
      }
    });

    if (this.allSavedBlogs.includes(variab.Id)) {
      this.apiService.deleteSavedItem(remoovedId).subscribe((data) => {
        this.apiService
          .viewAllSavedNews(this.userData.CompanyId, 'BlogPost')
          .subscribe(
            (res: any) => {
              // console.log(res);
              this.allSavedBlogs = [];
              res.GetBlogPost.forEach((ele) => {
                this.allSavedBlogs.push(ele.Id);
              });
            },
            (err) => console.log(err)
          );
        this.apiService
          .savedItems(this.userData.CompanyId, 'BlogPost')
          .subscribe(
            (res: any) => {
              this.allBlogSaved = res;
            },
            (err) => console.log(err)
          );
      });
    } else {
      this.allSavedEvents.push(variab.Id);
      var objs = {
        UserId: this.userData.CompanyId,
        ItemName: 'BlogPost',
        ItemId: variab.Id,
      };
      // console.log(variab.Id);

      this.apiService.saveEvents(objs).subscribe((data) => {
        // this.savaEventData =data;
        // console.log("res",data);
        // this.alert=true;
        // this.savedEvent = true;
        this.apiService
          .savedItems(this.userData.CompanyId, 'BlogPost')
          .subscribe(
            (res: any) => {
              this.allBlogSaved = res;
            },
            (err) => console.log(err)
          );
      });
    }
  }



  onSubmitForm() {
    // console.log(this.myForm);
    // console.log(...this.myForm,...this.blogimage);
    let alldata: any = {};
    alldata = { ...this.myForm.value, ...this.blogimage };
    let obj = {
      "Title": this.myForm.value.Title,
      "Body": this.myForm.value.Body,
      "AthourImg": this.authorImg,
      "AuthorName": this.myForm.value.AuthorName,
      "AuthorId": this.myForm.value.AuthorId,
      "BlogImg": this.blogimage.replace(/^data:image\/[a-z]+;base64,/, ""),


      
    }
    console.log(obj);

    this.apiService.blogsPost(obj).subscribe((res: any) => {
      console.log(res);
    }, (err) => console.log(err))
    this.isSubmitted = true;
    this.ngOnInit();
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/blogs']);

  }

  get f() {
    return this.myForm.controls;
  }



  getTimeAgo(givenDate) {

    let currentTime;
    let givenTime;
    currentTime = new Date();
    givenTime = new Date(givenDate.PostedAt);
    this.postDateTime1 = new Date(givenDate.PostedAt).toString().split(' ');
    // console.log(this.postDateTime1[1], "----",this.today);

    const diffInMilliseconds = currentTime - givenTime;

    const diffInSeconds = Math.round(diffInMilliseconds / 1000);
    const diffInMinutes = Math.round(diffInSeconds / 60);
    const diffInHours = Math.round(diffInMinutes / 60);
    const diffInDays = Math.round(diffInHours / 24);
    let diffDate: any = (diffInHours >= 168);
    // console.log("diffDate", diffInDays);

    if (diffInSeconds < 60) {
      return diffInSeconds + " Seconds ago";
    } else if (diffInMinutes < 60) {
      return diffInMinutes + " Minutes ago";
    } else if (diffInHours < 24) {
      return diffInHours + " Hours ago";

    }
    else if (diffInHours >= 168) {
      return this.postDateTime1[1] + " " + this.postDateTime1[2] + " " + this.postDateTime1[3];
    }
    else {
      return diffInDays + " Days ago";
    }

  }

  
  blogsData(id: any) {
    this.route.navigate(['blogs/blogsdetail'], { queryParams: { id: id } });
    // console.log("Hellow every1", this.newsId);
  }


  // ckeditorContent;


  onEditorChange(event) {
    console.log(event);
  }

  onChange(event: any): void {
    console.log(event);
    console.log(this.mycontent);
    //this.log += new Date() + "<br />";
  }

  // date diff
  calcDate(blogDate) {
    let currentTime = new Date().getTime()
    let blogTime = new Date(blogDate.StartDateUtc).getTime()
    // console.log(splittedDate);
    let time = currentTime - blogTime;

    let diffDay = Math.floor(time / 86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time % 86400000) / 3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    // console.log('day diff',diffDay);
    // console.log('hour diff', diffHour);
    //  console.log('MIn diff', diffMin);

    if (diffDay >= 1) {
      return diffDay
    }
    else if (diffHour >= 1 || diffMin == 0) {
      return diffHour
    }
    else {
      return diffMin
    }
  }


  hourTime(key) {
    let currentTime = new Date().getTime()
    let blogTime = new Date(key.StartDateUtc).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - blogTime;

    let diffDay = Math.floor(time / 86400000);;  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time % 86400000) / 3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    if (diffDay >= 1) {
      return key = "Days Ago"
    }
    else if (diffHour >= 1 || diffMin == 0) {
      return key = "Hours Ago"
    }
    else {
      return key = "Minutes Ago"
    }

  }

  moveToPrivacy() {
    this.route.navigate(['/privacyPolicy']);
  }


  share(i:any){
    console.log(i)
    this.share1=i;
  }
  goBack() {
    // this.location.back();
    console.log("goback")
    localStorage.removeItem('backPage');
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/blogs']);
  }

  redirectToWriteBlog() {
    this.route.navigate(['blogs/writeblogs']);
  }
}
