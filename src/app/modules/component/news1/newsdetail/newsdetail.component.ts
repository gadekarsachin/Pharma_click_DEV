import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { constants } from 'buffer';
import { ApiService } from 'src/app/modules/shared/services/api.service';
// import { News } from 'src/app/shared/news';


@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
  newsMenu:any;
  path1:any;
  share:any;
  getNewsMenu:any;
  newsId:any;
  newsallinfo:any[]=[];
  objData:any;
  objData1:any;
  public userData:any;
  public savedCompany:boolean=false;
  allSavedNews:any=[];
  advImg:any;
  isSubmitted:boolean= false;
  isSubmitted2:boolean= false;
  myForm:any;
  myForms1:any;
  gettoken:any;
  getuserdata:any;
  shareimg:any=false
  showdata:any=false
  name='om';
  postDateTime:any;
  redirecturl:any;
passNewsId:any;
allNewsSaved:any=[];
commentCount:any;
mySubscription: any;
commentid:any;
activeClass:any;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, 
    private router: Router, private locations1: Location, private fb:FormBuilder) { 

      let item = localStorage.getItem("catName");
      this.activeClass = item;
      console.log("Itemcatname",item);
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
      //Refresh without reload component
      
    }


    
  ngOnInit(): void {
    this.path1 = window.location.pathname;
    this.redirecturl=window.location.href
     // This is used for get user data to send to info for commit api
     this.gettoken=localStorage.getItem('token1');
     this.getuserdata=JSON.parse( this.gettoken);
     console.log( "hello",this.getuserdata);
     if(this.getuserdata==null){
      console.log( "shareimg",this.getuserdata);
      this.shareimg=true;
     }
     else{
      this.shareimg=false;
     }
    this.postDateTime=new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString();
    // console.log(this.postDateTime);
    this.passNewsId=localStorage.getItem('NewsId');
  




  

    this.userData = JSON.parse(localStorage.getItem("token1"));
    // console.log("path===",window.location.pathname);
    // function onDeviceReady(){
      // document.addEventListener("backbutton", function(e){
      //     if(window.location.pathname=='/allnews/Newsdetail'){
            
      //         e.preventDefault();
      //         (navigator as any).app.backHistory();
      //     } 
      // }, false);
      // document.addEventListener("deviceready", function(e){
      //   document.addEventListener("backbutton", function(r){

      //   }, false);
      // }, false);
    

      // document.addEventListener("backbutton", onBackKeyDown, false);  
      // function onBackKeyDown(e) { 
      //  history.go(-1);
      // (navigator as any).app.backHistory();
      // }


    // device APIs are available
    //
   
        // Register the event listener
       
//       document.addEventListener("backbutton", onBackKeyDown, false);  
// function onBackKeyDown(e) { 
//    e.preventDefault(); 
  //  alert('Back Button is Pressed!'); 
// }

    // }
    // document.addEventListener("deviceready", onDeviceReady, false);
// [Dipak ahirav][21-Oct2022] - Ne saved item arra
if(this.userData!==null){
  this.apiService.savedItems(this.userData.CompanyId,"News").subscribe((res:any)=>{
    // console.log(res);
  this.allNewsSaved=res
    
  
  },(err)=>console.log(err))
  // // [Dipak ahirav][21-Oct2022] - Ne saved item arra
      // [Dipak Ahirav]
      this.apiService.viewAllSavedNews(this.userData.CompanyId,"News").subscribe((res:any)=>{
        // console.log(res);
        res.Getnews.forEach(ele=>{
          this.allSavedNews.push(ele.Id);
        })
        
  
      },(err)=>console.log(err))
  // [Dipak Ahirav]
  
}

this.apiService.viewAllNewsList().subscribe((res:any)=>{
  console.log(res);
  this.newsMenu=res;

  localStorage.setItem("newsMenu",JSON.stringify( this.newsMenu));

  this.getNewsMenu = JSON.parse(localStorage.getItem("newsMenu"));
  
  // for (const iterator of getNewsMenu) {
  //   // console.log(iterator.CategoryName);

  //   this.commonService.CatWiseNewsDisplay(iterator.CategoryName).subscribe((res:any)=>{
  //     console.log(res);
  //   },(err)=>console.log(err));
    
  // }


},(err)=>console.log(err))

 
    this.activatedRoute.queryParamMap.subscribe(data => {
        this.newsId = data.get('id');
        console.log("hello",this.newsId);
      });   
    if(this.userData!==null){
      this.getNewsInfo();
    
    }
    else{
      this.getNewsInfoDefault();
    }
      
     
     this.apiService.viewAllAdvertiseImgs().subscribe((res:any)=>{
      // console.log(res);
      this.advImg=res;
    },(err)=>console.log(err))

    // console.log("id"+ this.newsallinfo);
if(this.userData!==null){
  this.myForm=this.fb.group({
    CustomerId:[this.getuserdata.CompanyId],
    NewsComment:['',[Validators.required]],
    NewsCommenterName:[this.getuserdata.CompanyName],
    NewsCommentDate:[this.postDateTime],
    NewsCommenterImg:[this.getuserdata.CompanyLogo],
    // NewsId:[this.passNewsId]
    NewsId: this.newsId

  })
}


    console.log("need to check id", this.passNewsId)
if(this.userData!==null){
  this.myForms1=this.fb.group({
    CustomerId:[this.getuserdata.CompanyId],
    ReplyText:['',[Validators.required]],
    // NewsCommentId:[this.getuserdata.CompanyName],

 
  })
}
   

    // like

   


  }
  getNewsInfoDefault()
  {


    this.apiService.viewNewsInfo(this.newsId,0).subscribe((res:any)=>{
      console.log(res);
      this.share=res.Title;
      // res.StartDateUtc ="2022-10-20T19:00:00";
      this.objData=res;
      // console.log(this.objData.NewsComments.length);
      this.commentCount=this.objData.NewsComments.length;    
      this.newsallinfo.push(this.objData);
      // console.log(this.newsallinfo[0]);
      localStorage.setItem('NewsId',JSON.stringify(res.Id));
     },(err)=>console.log(err));

  }
  getNewsInfo()
  {


    this.apiService.viewNewsInfo(this.newsId, this.getuserdata.CompanyId).subscribe((res:any)=>{
      console.log(res);
      this.share=res.Title;
      // res.StartDateUtc ="2022-10-20T19:00:00";
      this.objData=res;
      // console.log(this.objData.NewsComments.length);
      this.commentCount=this.objData.NewsComments.length;    
      this.newsallinfo.push(this.objData);
      // console.log(this.newsallinfo[0]);
      localStorage.setItem('NewsId',JSON.stringify(res.Id));
     },(err)=>console.log(err));

  }

  likeshow(data:any)
  {
    console.log(data);
    let x = document.getElementById('likediv'+data);
    console.log("x==",x);
    // $(this).attr("'Likediv'+i").click( function(){ $(this).toggleClass("clicked") })
    
    if (x.style.color === "gray") {
      x.style.color = "red";
    } else {
      x.style.color = "gray";
    }
 
  }

  replayshow(data:any)
  {
    // console.log("data = ", data);
    var x = document.getElementById('replaydiv'+data);
    // var x=  $(this).attr("id");
    // console.log("x ====", x);
   
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  onSubmitForm(){
    // console.log(this.myForm);
    console.log(this.myForm.value);
    // console.log(this.getuserdata.CompanyId);

    this.apiService.postNewsComment(this.myForm.value).subscribe((res:any)=>{
      // console.log(res);
      this.getNewsInfo();

        this.router.navigate(['/allnews/Newsdetail'], { queryParams: { id: this.newsId } });
        // this.route.navigate(['/allnews/Newsdetail']);
        // console.log(id);
    
    },(err)=>console.log(err));
    // this.getNewsInfo();
    this.myForm.reset();  
  }

  get f(){
    return this.myForm.controls;
  }
  commentId(data:any)
  {
    this.commentid=data;
console.log(data);
  }

  replaySubmit(){

    let obj={

      "CustomerId":this.myForms1.value.CustomerId,
      "ReplyText":this.myForms1.value.ReplyText,
      "NewsCommentId" :this.commentid,
      "NewsItemId":this.passNewsId
    }
    console.log("replay",obj);

    this.apiService.newsCommentOnReplay(obj).subscribe((res:any)=>{
      console.log(res);
    },(err)=>console.log(err))
  }

   get g(){
    return this.myForms1.controls;
  }
  
  

  // date diff
  calcDate(newsDate){
    let currentTime = new Date().getTime()
    let newsTime = new Date(newsDate.StartDateUtc).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    // console.log('day',diffDay);
    // console.log('hour', diffHour);

    if(diffDay>=1){
      return diffDay
    }
    else if(diffHour>=1 || diffMin== 0) {
      return diffHour
    }
    else
    {
      return diffMin
    }
  }

  hourTime(key){
    let currentTime = new Date().getTime()
    let newsTime = new Date(key.StartDateUtc).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    if(diffDay>=1){
      return key = "Days ago"
    }
    else  if(diffHour>=1 || diffMin==0) {
      return key = "Hours ago"
    }
    else{
      return key = "Minutes ago"
    }
  }
 
  // This Date and time function used for comments date
  calcDate1(newsDate){
    let currentTime = new Date().getTime()
    let newsTime = new Date(newsDate.NewsCommentDate).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    // console.log('day',diffDay);
    // console.log('hour', diffHour);

    if(diffDay>=1){
      return diffDay
    }
    else if(diffHour>=1 || diffMin== 0) {
      return diffHour
    }
    else
    {
      return diffMin
    }
  }

  hourTime1(key){
    let currentTime = new Date().getTime()
    let newsTime = new Date(key.NewsCommentDate).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    if(diffDay>=1){
      return key = "Days ago"
    }
    else  if(diffHour>=1 || diffMin==0) {
      return key = "Hours ago"
    }
    else{
      return key = "Minutes ago"
    }
  }

  hourTime2(key){
    let currentTime = new Date().getTime()
    let newsTime = new Date(key.NewsCommentDate).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    if(diffDay>=1){
      return key = "Days ago"
    }
    else  if(diffHour>=1 ) {
      return key = "Hours ago"
    }
    else{
      return key = "Minutes ago"
    }
  }


  // This Date and time function used for comments date
  calcDate2(newsDate){
    let currentTime = new Date().getTime()
    let newsTime = new Date(newsDate.CreatedOn).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - newsTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    let diffMin = Math.floor(((time % 86400000) % 3600000) / 60000);

    // console.log('day',diffDay);
    // console.log('hour', diffHour);

    if(diffDay>=1){
      return diffDay
    }
    else if(diffHour>=1 || diffMin== 0) {
      return diffHour
    }
    else
    {
      return diffMin
    }
  }
 
  
// share(i:any){
//   console.log(i)
//   this.share1=i;
// }
 
  goesBack(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/allnews']);

  }

   // [Dipak Ahirav][13-Oct-2022] - Save data of news
   saveNews(){
   
    var remoovedId;
    this.allNewsSaved.forEach(ele=>{
      if(ele.ItemId === this.objData.Id){
        remoovedId=ele.Id
      }
    })

  if(this.allSavedNews.includes(this.objData.Id)){
    this.apiService.deleteSavedItem(remoovedId).subscribe( data=> {
      this.apiService.viewAllSavedNews(this.userData.CompanyId,"News").subscribe((res:any)=>{
        // console.log(res);
        this.allSavedNews=[];
        res.Getnews.forEach(ele=>{
          this.allSavedNews.push(ele.Id);
        })
        
      
      },(err)=>console.log(err))
      this.apiService.savedItems(this.userData.CompanyId,"News").subscribe((res:any)=>{
 
      this.allNewsSaved=res
     
      },(err)=>console.log(err))
    });
  }else{
    this.allSavedNews.push(this.objData.Id);
    var objs = {
      "UserId": this.userData.CompanyId,
      "ItemName": "News",
      "ItemId": this.objData.Id
    }
    // console.log(variab.Id);
  
    this.apiService.saveEvents(objs).subscribe( data=> {
      // this.savaEventData =data;
      // console.log("res",data);
      this.savedCompany=true;
      this.apiService.savedItems(this.userData.CompanyId,"News").subscribe((res:any)=>{
    
      this.allNewsSaved=res
   
      },(err)=>console.log(err))
    });
  }
 
}
// [Dipak Ahirav][13-Oct-2022] - Save data of news
 isLiked=false;
commentLike(likeId:any,likeval:any)
{
// console.log(like);
// console.log(this.isLiked =!this.isLiked);
let obj={};
obj={
  "NewsItemId": this.newsId,
  "NewsCommentId": likeId,
  "CustomerId":    this.userData.CompanyId,
  "IsLiked": likeval,
  "LikeRecord": true,
  "Deleted": true
}
console.log(obj);
this.apiService.newsLike(obj).subscribe((res:any)=>{
  console.log(res);
},(err)=>console.log(err));

}

sendMsg(){
  
  var options = {
    message: 'Company', // not supported on some apps (Facebook, Instagram)
 
    files: ['', ''], // an array of filenames either locally or remotely
    url: "https://play.google.com/store/apps/details?id=io.cordova.pharmaClick",
    chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
   
  };
  var onSuccess = function(result) {
   
  };
  
  var onError = function(msg) {
    
  };
  
  window['plugins'].socialsharing.shareWithOptions(options, onSuccess, onError);

  //  window['plugins'].CallNumber.callNumber(onSuccess, onError, '8460058030', true);
}

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

}