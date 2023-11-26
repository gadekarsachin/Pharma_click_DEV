import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Blogs } from 'src/app/shared/blogs';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  // base64textString: any;
  path1: any;
  public classList: string = "";
  public classSearch1: string = "";
  classMenu: any;
  blogList: any;
  wordLimit: number = 14;
  showMore: boolean = false;
  dispayData: any = true;
  totalPagecount: any = 0;
  name = "ng2-ckeditor";
  ckeConfig: any;
  mycontent: string;
  log: string = "";
  @ViewChild("myckeditor") ckeditor: any;

  profileData: any;
  profileName: any;
  myForm: any;
  isSubmitted: boolean = false;
  getSearchData: any;
  blogimage: any;
  base64textString: any;
  authorImg: any;
  dataArr: any = [];
  // blogImgs: any = '../../../../../assets/images/pexels-pixabay-208512.jpg'
  blogImgs: any = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVRYhe2UsYsTQRSHv9lcxEiwCjZ34B+gYm9rI4dwcMU1miKCLmazEUu9Zi3E7pDsmyKgIIgiKUSbs/UKW0u54kAEQTiW2CgYk+yzSSSJm2jIJkG4r1n2zZv9fcsMD444IkVExLPW3p5mj5Oyw0NV3RGRO8sSWOk974tIcRkCfQzwWEQuLksAIAu8DMPw3LIEAE4aY3ZrtdrasgQA1hzHeW2tzSctmnG76vX6iU6ncyWO4w1jzHngFHBsBpHdKIo2giDoDBZXkjpFZKvdbu8Aq8aMdZyW9UKhYAF3sPjHEYjIPeAFsJpW8gA3RmfE0O9Za8uqaucQPIgaY4qe5z0bEhCR08A+cHzOAgAtY8xZz/MOBo/g7oLCh3AAGo1GBthcUKYC1z3PO/gtEEXRGaCwIIHtSqXytP/iAHS73Xnc+CQeVSqVB4OF/h1InFJpYox5E0XRzdF64iDq8R14EsfxK2C/2WweBkHwc1KIiOiYpffA1ugUHCugqnuqerVarX6eFPiPfMpms5dd1/2WtJgk8C6fz18qlUo/Ugj/Gsfxuuu6X8Y1jI7ilqoWUwpvqepmtVr9MKnJAchkMoe994bv+x9TCFdVveb7/tu/NToA5XJ5D7iQy+W8GYP7l2zb9/3nM35reqy15TAMby08+Ij/ml/alqIyAtoYsgAAAABJRU5ErkJggg=='

  constructor(private apiService: ApiService, private route: Router, private fb: FormBuilder,
    private location: Location, private sanitizer: DomSanitizer,private toastr: ToastrService) {

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

    //  this.apiService.searchBlogNew.subscribe((res:any)=>{
    //   console.log(res);
    //   let mainDiv = document.getElementById("div1");
    //   let searchDiv = document.getElementById("div2");

    //   if(res== null)
    //   {
    //     mainDiv.style.display="inline";
    //     searchDiv.style.display="none";  
    //   }
    //   else
    //   {
    //     this.getSearchData=res;
    //     mainDiv.style.display="none";
    //     console.log("not empty data");  
    //     searchDiv.style.display="block";      

    //   }

    // },(err)=>console.log(err))


    // ------------------

   
    this.apiService.viewBlogs(0, 50).subscribe((res: any) => {
      this.blogList = res.m_Item1;
      for (let i = 0; i < this.blogList.length; i++) {
        this.blogList[i].BlogImglink = this.blogList[i].BlogImglink.replace(this.blogList[i].BlogImglink.substring(this.blogList[i].BlogImglink.indexOf('/api'), this.blogList[i].BlogImglink.indexOf('/media')), '/');
      }
      console.log("res", this.blogList);
    });
    // this.dispayData = false;
    // setTimeout(() => {
    //   this.apiService.viewBlogs(0, 5).subscribe((data: any) => {
    //     this.totalPagecount = data.m_Item2;

    //     this.apiService.viewBlogsImage(0, 5).subscribe((img: any) => {

    //       for (let i = 0; i < data.m_Item1.length; i++) {

    //         data.m_Item1[i].BlogImglink = img.m_Item1[i].BlogImg;

    //       }

    //     });
    //     console.log("....t.....:", data)
    //     this.dispayData = true;
    //     this.blogList = data.m_Item1;
    //   });
    // }, 2000)



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


    this.apiService.viewBlogs(0, 50).subscribe((data: any) => {
      this.blogList = data.m_Item1;
    });


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
    console.log(fullName);
    this.myForm = this.fb.group({
      Title: ['', [Validators.required]],
      Body: [''],
      Tags: [''],
      Source: [''],
      AuthorName:[''],
      AuthorId: [this.profileData.CompanyId],
      PublisherName: [this.profileName],
      
      // BlogImg: ['',[Validators.required]]
      accepted1: [false, Validators.requiredTrue]
    });



  }







  onSubmitForm() {
    console.log("myForm",this.myForm.value);
    // console.log(...this.myForm,...this.blogimage);
    let alldata: any = {};
    alldata = { ...this.myForm.value, ...this.blogimage };
    let obj = {
      "Title": this.myForm.value.Title,
      "Body": this.myForm.value.Body,
      "Tags": this.myForm.value.Tags,
      "Source": this.myForm.value.Source,
      "PublisherName": this.myForm.value. PublisherName,
      "AuthorId": this.myForm.value. AuthorId,
      "AuthorName": this.myForm.value.AuthorName,
      // "AuthorId": this.myForm.value.AuthorId,
      "BlogImg": this.blogimage.replace(/^data:image\/[a-z]+;base64,/, "")
      // "BlogImg": this.blogImgs
    }
    console.log("obj",obj);

    this.apiService.blogsPost(obj).subscribe((res: any) => {
      console.log(res);

      if (res == 'Saved Sucessfully') {
        // alert('Success! Please check your email for password reset instructions.');
        $('#savedS').html('');
        $('#savedS').append(
          "<div class='alert alert-success show'>" +
          '<strong>Your Blog Posted Sucessfully</strong>' +
          '</div>'
          
        );
        this.toastr.success("Thank you for submitting your blog! The blog will be published within 24 hours.");
      }

      this.route.navigate(['blogs/blogslist'])


    },
      // (err)=>console.log(err))
      (err => {
        console.log("err", err);
        if (err.error.Message == 'An error has occurred.') {
          $('#errorMsg').html('');
          $('#errorMsg').append(
            "<div class='alert '>" +
            '<strong>An error has occurred.</strong>' +
            '</div>'
          );
        }
      }));
    this.isSubmitted = true;
    // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.route.onSameUrlNavigation = 'reload';
    // this.route.navigate(['/blogs']);

  }

  get f() {
    return this.myForm.controls;
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

  goBack() {
    // this.location.back();
    console.log("goback")
    localStorage.removeItem('backPage');
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/blogs']);
  }
  toRedirectBlog() {
    this.route.navigate(['/blogs']);
  }
}
