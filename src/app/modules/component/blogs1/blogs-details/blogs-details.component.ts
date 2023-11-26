import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Blogs } from 'src/app/shared/blogs';
import { BlogComments } from 'src/app/shared/blog-comments';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';


declare var $: any;
@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})

export class BlogsDetailsComponent implements OnInit {
  path1: any;
  share1:any;
  blogId: any = 0;
  blogData: any;
  blogList: any;
  commentId: any;
  blogComment: any;
  allEventsSaved: any = [];
  submitLabel!: string;
  public userData: any;
  public savedEvent: boolean = false;
  public allSavedEvents: any = [];
  public allSavedBlogs: any = [];
  getotherblogList: any = [];
  FollowValue: any;
  hasCancelButton: boolean = false;
  initialText: string = '';
  dataArr: any = [];
  form: FormGroup;
  myForm: any;
  isSubmitted: boolean = false;
  myForms1: any;
  isSubmitted2: boolean = false;
  s: any;
  userId:any;
  postDateTime: any;
  postDateTime1: any;
  redirecturl:any;
  constructor(private location: Location, private activatedRoute: ActivatedRoute,
    private apiService: ApiService, private fb: FormBuilder, private route: Router,private clipboardService: ClipboardService) { }

  ngOnInit(): void {
    this.redirecturl=window.location.href
    this.path1 = window.location.pathname;
    this.userId = JSON.parse(localStorage.getItem('token1')).CompanyId
    let tokens = localStorage.getItem('token1');
    this.s = JSON.parse(tokens);
    this.dataArr.push(this.s);
    console.log("currently login user id", this.s);

    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //  history.go(-1);
    // (navigator as any).app.backHistory();
    // }

    this.postDateTime = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();
    // console.log(this.postDateTime);


    let fullName: any;

    this.activatedRoute.queryParamMap.subscribe(data => {
      this.blogId = data.get('id');
      // console.log("hello",data['id']);
    });

    fullName = this.s.FirstName + " " + this.s.LastName;
    console.log(fullName);
    this.myForm = this.fb.group({
      Id: [],
      BlogCommentTitle: [],
      Likes: [],
      Reply: [],
      BlogComment: ['', [Validators.required]],
      CustomerId: [this.s.CompanyId],
      BlogCommenterName: [fullName],
      BlogCommenterImg: [this.s.CompanyLogo],
      BlogId: [this.blogId],
      BlogCommentDate: [this.postDateTime]

    });

    this.myForms1 = this.fb.group({
      CustomerId: [this.s.CompanyId],
      ReplyText: ['', [Validators.required]],
      // NewsCommentId:[this.getuserdata.CompanyName], 
    })

    this.apiService
    .viewBlogDetails(this.blogId, this.s.CompanyId)
    .subscribe((viewData: any) => {
      this.blogData = viewData;
      for (let i = 0; i < this.blogData.length; i++) {
        this.blogData[i].BlogImglink = this.blogData[i].BlogImglink.replace(this.blogData[i].BlogImglink.substring(this.blogData[i].BlogImglink.indexOf('/api'), this.blogList[i].BlogImglink.indexOf('/media')), '/');
      }
      this.apiService
        .viewBlogimg(this.blogId)
        .subscribe((image: any) => {
          this.blogData.BlogImglink = image.BlogImg;

        });

      if (this.allSavedBlogs.includes(this.blogData.AuthorId)) {
        this.FollowValue = 'Following';
      } else {
        this.FollowValue = 'Follow';
      }
      this.getotherblogList.push(viewData.RemainingBlog);
      console.log('viewData.BlogComments = ', viewData.RemainingBlog);
      // console.log("Hi",this.blogcommentcount.length);
      // console.log("Hi", this.blogId);
    });


    

    this.apiService.viewBlogs(0, 50).subscribe((data: any) => {
      this.blogList = data.m_Item1;
    });

    // view blog comments
    this.apiService.viewBlogComments().subscribe(data => {
      this.blogComment = data;
      // console.log(data);
    });

    // allevent slider

    ($('#owl-carousel') as any).owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      items: 1,
    })


  }

  
  goBack() {
    this.location.back();
  }
 blogclapp(blogId: any, likeval: any) {
    // console.log("data=",blogId);

    let obj: any;
    obj = {
      CustomerId: this.s.CompanyId,
      Likedby: 'string',
      BlogPostId: blogId,
      Deleted: true,
      Liked: likeval,
      LikedText: 'string',
    };

    console.log(obj);
    this.apiService.blogLike(obj).subscribe(
      (res: any) => {
        this.ngOnInit();
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  blogLike(data: any) {

    console.log(data)
    let obj = {
      "CustomerId": this.s.CompanyId,
      "Likedby": "string",
      "BlogPostId": this.blogId,
      "Deleted": true,
      "Liked": data,
      "LikedText": "string"
    }
    // console.log(obj)

    // this.apiService.postBlogLike(obj).subscribe((res:any)=>{
    //   console.log(res);
    //   this. ngOnInit();
    // },(err)=>console.log(err))


  }
  copyLink() {
    this.clipboardService.copyFromContent(window.location.href);
    // When the user clicks the share icon, copy the link and show the message
  var copyText = window.location.href; // get the current URL
  navigator.clipboard.writeText(copyText);
  var message = document.getElementById("share-message");
  message.style.display = "inline-block";
  setTimeout(function() {
    message.style.display = "none";
  }, 2000); // hide message after 2 seconds 
  }

  // add blog comment
  addNewBlogComment() {

    console.log(this.myForm.value);
    this.apiService.postBlogComment(this.myForm.value).subscribe((res: any) => {
      console.log(res);
    })

    this.myForm.reset();
  }

  get f() {
    return this.myForm.controls;
  }

  
  replaySubmit() {

    let obj = {

      "CustomerId": this.myForms1.value.CustomerId,
      "ReplyText": this.myForms1.value.ReplyText,
      // "NewsCommentId" :this.commentid,
      // "NewsItemId":this.passNewsId
    }
    console.log("replay", obj);

    this.apiService.newsCommentOnReplay(obj).subscribe((res: any) => {
      console.log(res);
    }, (err) => console.log(err))
  }

  get g() {
    return this.myForms1.controls;
  }


  redirectToAthour(id: any) {
    this.route.navigate(['blogs/author'], { queryParams: { id: id } });
    // console.log("Hellow every1", this.newsId);
  }

  // onSubmit(): void {
  //   this.handleSubmit.emit(this.form.value.title);
  //   this.form.reset();
  // }

  // date diff
  calcDate(newsDate) {
    let currentTime = new Date().getTime()
    let newsTime = new Date(newsDate.BlogCommentDate).getTime()
    // console.log(newsDate.StartDateUtc);
    let time = currentTime - newsTime;

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
    let newsTime = new Date(key.BlogCommentDate).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time / 86400000);;  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time % 86400000) / 3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    if (diffDay >= 1) {
      return key = "Days ago"
    }
    else if (diffHour >= 1 || diffMin == 0) {
      return key = "Hours ago"
    }
    else {
      return key = "Minutes ago"
    }

  }

  calcDate1(newsDate) {
    let currentTime = new Date().getTime()
    let newsTime = new Date(newsDate.commentedAt).getTime()
    // console.log(newsDate.StartDateUtc);
    let time = currentTime - newsTime;

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


  hourTime1(key) {
    let currentTime = new Date().getTime()
    let newsTime = new Date(key.commentedAt).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time / 86400000);;  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time % 86400000) / 3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    if (diffDay >= 1) {
      return key = "Days ago"
    }
    else if (diffHour >= 1 || diffMin == 0) {
      return key = "Hours ago"
    }
    else {
      return key = "Minutes ago"
    }

  }

  getTimeAgo(givenDate) {

    let currentTime;
    let givenTime;
    currentTime = new Date();
    givenTime = new Date(givenDate.CommentDate);
    this.postDateTime1 = new Date(givenDate.CommentDate).toString().split(' ');
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
  getTimeAgo1(givenDate) {
    let currentTime;
    let givenTime;
    currentTime = new Date();
    givenTime = new Date(givenDate.CreatedOn);

    const diffInMilliseconds = currentTime - givenTime;

    const diffInSeconds = Math.round(diffInMilliseconds / 1000);
    const diffInMinutes = Math.round(diffInSeconds / 60);
    const diffInHours = Math.round(diffInMinutes / 60);
    const diffInDays = Math.round(diffInHours / 24);
    this.postDateTime1 = new Date(givenDate.CreatedOn).toString().split(' ');

    if (diffInSeconds < 60) {
      return diffInSeconds + ' Seconds ago';
    } else if (diffInMinutes < 60) {
      return diffInMinutes + ' Minutes ago';
    } else if (diffInHours < 24) {
      return diffInHours + ' Hours ago';
    } else if (diffInHours >= 168) {
      return (
        this.postDateTime1[1] +
        ' ' +
        this.postDateTime1[2] +
        ' ' +
        this.postDateTime1[3]
      );
    } else {
      return diffInDays + ' Days ago';
    }
  }

  
  likeOnComment(id: any, likeval: any) {
    this.blogData.BlogComments.forEach((ele) => {
      if (ele.CommentId == id) {
        ele.IsLiked = likeval;
      }
    });
    let obj = {
      BlogItemId: this.blogId,
      BlogCommentId: id,
      CustomerId: this.s.CompanyId,
      IsLiked: likeval,
      LikeRecord: true,
    };
    console.log(obj);

    this.apiService.likeOnblogComment(obj).subscribe(
      (res: any) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => console.log(err)
    );
  }

  saveBlogsD(variab: any) {
    // console.log("saveE",variab);
    var remoovedId;
    this.allEventsSaved.forEach((ele) => {
      if (ele.ItemId === variab) {
        remoovedId = ele.Id;
      }
    });

    if (this.allSavedEvents.includes(variab)) {
      this.apiService.deleteSavedItem(remoovedId).subscribe((data) => {
        this.apiService
          .viewAllSavedNews(this.userData.CompanyId, 'BlogPost')
          .subscribe(
            (res: any) => {
              // console.log(res);
              this.allSavedEvents = [];
              res.Getevents.forEach((ele) => {
                this.allSavedEvents.push(ele.Id);
              });
            },
            (err) => console.log(err)
          );
        this.apiService
          .savedItems(this.userData.CompanyId, 'BlogPost')
          .subscribe(
            (res: any) => {
              this.allEventsSaved = res;
            },
            (err) => console.log(err)
          );
      });
    } else {
      this.allSavedEvents.push(variab);
      var objs = {
        UserId: this.userData.CompanyId,
        ItemName: 'BlogPost',
        ItemId: variab,
      };
      console.log(variab.Id);

      this.apiService.saveEvents(objs).subscribe((data) => {
        this.savedEvent = true;
        this.apiService
          .savedItems(this.userData.CompanyId, 'BlogPost')
          .subscribe(
            (res: any) => {
              this.allEventsSaved = res;
            },
            (err) => console.log(err)
          );
      });
    }
  }
  getBlogFollowers() {
    this.apiService.getFollowerAuthor(this.userData.CompanyId).subscribe(
      (res: any) => {
        this.allSavedBlogs = [];
        res.forEach((ele) => {
          this.allSavedBlogs.push(ele.AuthorId);
        });
        // this.allEventsSaved=res
      },
      (err) => console.log(err)
    );
  }

  followAuthor(id) {
    let val;

    if (this.allSavedBlogs.includes(id)) {
      val = false;
      this.FollowValue = 'Follow';
    } else {
      val = true;
      this.FollowValue = 'Following';
    }

    let data = {
      AuthorId: this.blogData.AuthorId,
      FollowerId: this.userData.CompanyId,
      Followed: val,
    };
    this.apiService.followAuthor(data).subscribe(
      (res: any) => {
        this.getBlogFollowers();
        // this.allEventsSaved=res
      },
      (err) => console.log(err)
    );
  }
  replaypost(data: any) {
    console.log(data);
    this.commentId = data;
  }
  replayshow(data: any) {
    // console.log("data = ", data);
    var x = document.getElementById('replaydiv' + data);
    // var x=  $(this).attr("id");
    // console.log("x ====", x);

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  share(i:any){
    console.log(i)
    this.share1=i;
  }

}
