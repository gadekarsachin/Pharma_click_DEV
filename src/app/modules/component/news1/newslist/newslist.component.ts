import { JsonPipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { News } from 'src/app/shared/news';
import { take } from 'rxjs/operators';
import * as introJs from 'intro.js/intro.js';
import { DomSanitizer } from '@angular/platform-browser';
import { ClipboardService } from 'ngx-clipboard';



@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  page = 0;
  // @ViewChild('container') container!: ElementRef;
  displayBlock: boolean = false;
  // public swiperConfig: SwiperOptions = {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // };
  public savedCompany: boolean = false;
  public classList: string = "";
  public classSearch: string = "";
  classMenu: any;
  // commit
 

  
  share1:any;
  public profileName: string = '';
  public profileData: any;
  public userData: any;
  newsList: News;
  newsId: string;
  date = new Date();
  newsMenu: any;
  allNews: any;
  path1: any;
  newsCat: any;
  todayNews: any[] = [];
  objToday: any;
  yesterdayNews: any[] = [];
  objYesterDay: any;
  biotechnologyNews: any;
  minibiotech: any;
  subscribeBiotech: any;
  environmentNews: any;
  minienvironmentNews: any;
  corporateNews: any;
  BioproductNews: any;
  date1 = new Date();
  getfromatdate: any;
  getfromatdate1: any;
  getfromatdateYseDay: any;
  getfromatdateYseDay1: any

  getSearchData: any;
  allSavedNews: any = [];

  clickCatNews: any;
  getCatWiseAllNews: any
  allNewsSaved: any = []

  getNewsMenu: any;
  introJS = introJs();
  showBtns: boolean = false;
  dataArr: any = [];
  base64textString: any;
  SortedAllNews: any = {};
  public activeClass: any;

  newsShowMsg: boolean = false;
  public allCatNewsList: any = [];

  constructor(private commonService: ApiService, private route: Router,
    private location: Location, private routess: ActivatedRoute, private sanitizer: DomSanitizer,private clipboardService: ClipboardService) {

      
    // if (localStorage.getItem('token')) {
    //   // return true;
    // } else {
    //   this.route.navigate(['/auth/login']);
    // }
  }

  copyLink(i) {
    this.clipboardService.copyFromContent(window.location.href);
    // When the user clicks the share icon, copy the link and show the message
  var copyText = window.location.href; // get the current URL
  navigator.clipboard.writeText(copyText);
  var message = document.getElementById("share-message"+i);
  message.style.display = "inline-block";
  setTimeout(function() {
    message.style.display = "none";
  }, 2000); // hide message after 2 seconds 
  }
  copyLinkyesterday(i) {
    this.clipboardService.copyFromContent(window.location.href);
    // When the user clicks the share icon, copy the link and show the message
  var copyText = window.location.href; // get the current URL
  navigator.clipboard.writeText(copyText);
  var message = document.getElementById("share-message-yesterday"+i);
  message.style.display = "inline-block";
  setTimeout(function() {
    message.style.display = "none";
  }, 2000); // hide message after 2 seconds


    
  }
  copyLinknow(i) {
    this.clipboardService.copyFromContent(window.location.href);
    // When the user clicks the share icon, copy the link and show the message
  var copyText = window.location.href; // get the current URL
  navigator.clipboard.writeText(copyText);
  var message = document.getElementById("share-message-yesterday1"+i);
  message.style.display = "inline-block";
  setTimeout(function() {
    message.style.display = "none";
  }, 2000); // hide message after 2 seconds


    
  }
  
  openMenu() {
    this.classMenu = 'nav--open';
    document.getElementById("sideNavClose").style.display = "block";

  }

  closeMenu() {
    this.classMenu = 'customNav'
    // this.toggleEvent.emit(this.classSearch)
  }
  // closeNav() {
  //   document.getElementById("sideNavClose").style.display = "none";
  // }

  receiveMessage(event) {
    console.log('event is :', event);
    this.classList = event;
  }


  openSearch() {
    console.log("ooooooooooooooo")
    this.classSearch = 'nav--open'
  }
  closeNav() {
    document.getElementById("main").style.display = "none";
    // this.router.navigate(['/homepage']);
  }

  receiveSearchMesg(event: any) {
    console.log('event is :', event);
    this.classSearch = event;
  }


  // today date format yyyy/mm/dd

  formatDate(dates) {
    var d = new Date(dates),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }



  // yesterday date format yyyy/mm/dd
  formatDate1(dates) {
    var d = new Date(dates),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }



  ngOnInit(): void {


    this.path1 = window.location.pathname;

    let tokens = JSON.parse(localStorage.getItem('token1'));
    // var s = JSON.parse(tokens);
    this.dataArr.push(tokens);
    console.log("currently login user id", this.dataArr[0].CompanyId);

    this.commonService.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res: any) => {
      // this.base64textString = res.FileContents; 
      this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);
    });

    this.commonService.viewAllNewsData(0, 100).subscribe((res: any) => {
      // console.log(res);
      this.allNews = res.m_Item1;

      this.SortedAllNews = this.allNews.sort(function (a, b) { return new Date(b.StartDateUtc).getTime() - new Date(a.StartDateUtc).getTime() })

      //  console.log(this.SortedAllNews);
      for (let x of this.SortedAllNews) {
        // console.log("date=====", x.StartDateUtc.slice(0, 10));

        if (this.getfromatdate == x.StartDateUtc.slice(0, 10)) {
          // Date equals today's date
          // console.log(x);
          this.objToday = x;
          this.todayNews.push(this.objToday);
          // this.share=res.Title;



        }
        else if (this.getfromatdateYseDay == x.StartDateUtc.slice(0, 10)) {

          this.objYesterDay = x;
          // console.log(this.objYesterDay)
          this.yesterdayNews.push(this.objYesterDay);
        }
        else {

        }

      }


    }, (err) => console.log(err))



    this.introJS.setOptions({
      steps: [
        {

          title: 'Application Tour..?',
          element: document.querySelector('.btnShow'),
          intro: 'Click on Next to view the application tour'
        },
        {

          title: 'News Categories',
          element: document.querySelector('.stepOne'),
          intro: 'Click to view the news as per selected category'
        },
        {

          title: 'Todays News',
          element: document.querySelector('.grand_Div'),
          position: 'top',
          intro: 'Click to view todays news'
        },
        {

          title: 'Yesterdays News',
          element: document.querySelector('.yestNews'),
          intro: 'Click to view yesterdays news'
        },
        {
          title: 'News as per categories',
          element: document.querySelector('.newCat'),
          intro: 'Click to view the news as per category'
        }
      ],
      showProgress: true,
      disableInteraction: false
    });

    // this.introJS.start();
    // this.introJS.onbeforechange((targetElement) => {
    // console.log("new step");
    // this.introJS.refresh();

    // });


    document.getElementsByClassName('first_slider')[0].scrollLeft = 0;

    var menus = document.getElementsByClassName(
      'newClassItem',
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(menus);
    setTimeout(() => {

      for (var i = 0; i < menus.length; i++) {

        if (menus[i].classList.contains('active-link')) {

          document.getElementsByClassName('first_slider')[0].scrollLeft = menus[i].offsetLeft - 75;
        }
      }
    }, 2000)



    this.userData = JSON.parse(localStorage.getItem("token1"));



    this.profileData = JSON.parse(localStorage.getItem('token1'));
    this.profileName = this.profileData.FirstName + " " + this.profileData.LastName;
    $('.feat-btn').click(function () {
      $('.nav__links ul .feat-show').toggleClass("show");
      $('.nav__links ul .first').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });

    $('.feat-btn1').click(function () {
      $('.nav__links ul .feat-show1').toggleClass("show1");
      $('.nav__links ul .first1').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });



    // today date format yyyy/mm/dd
    this.getfromatdate = this.formatDate(this.date);
    console.log("  this.getfromatdate  =   ", this.getfromatdate);
    // this.getfromatdate1 =this.getfromatdate+ "T00:00:00"; 


    // this.is used for yesterday news
    this.date1.setDate(this.date1.getDate() - 1);
    // console.log("this.yestDay",this.date1);    

    // yesterday date format yyyy/mm/dd
    this.getfromatdateYseDay = this.formatDate1(this.date1);
    //  console.log("  this.getfromatdate this.yestDay  =   ",   this.getfromatdateYseDay+ "T00:00:00" );
    //  this.getfromatdateYseDay1 =this.getfromatdateYseDay+ "T00:00:00";







    this.commonService.savedItems(this.userData.CompanyId, "News").subscribe((res: any) => {
      // console.log(res);
      this.allNewsSaved = res


    }, (err) => console.log(err))

    this.commonService.viewAllNewsList().subscribe((res: any) => {
      console.log(res);
      this.newsMenu = res;

      this.newsMenu.forEach(async ele => {
        await this.getAllNewsCatNews(ele.CategoryName)
      })

      localStorage.setItem("newsMenu", JSON.stringify(this.newsMenu));

      this.getNewsMenu = JSON.parse(localStorage.getItem("newsMenu"));

      // for (const iterator of getNewsMenu) {
      //   // console.log(iterator.CategoryName);

      //   this.commonService.CatWiseNewsDisplay(iterator.CategoryName).subscribe((res:any)=>{
      //     console.log(res);
      //   },(err)=>console.log(err));

      // }


    }, (err) => console.log(err))








    // [Dipak Ahirav]
    this.commonService.viewAllSavedNews(this.userData.CompanyId, "News").subscribe((res: any) => {
      // console.log(res);
      res.Getnews.forEach(ele => {
        this.allSavedNews.push(ele.Id);
      })


    }, (err) => console.log(err))
    // [Dipak Ahirav]
    // if(this.allSavedNews.includes())


    let clickedId: any;
    clickedId = localStorage.getItem('backPage');


    if (clickedId !== null) {
      // console.log("this.......",$(this).attr("id"));
      this.getNewsCat(clickedId);
      this.activeClass = clickedId;
      setTimeout(() => {

        $(document).ready(function () {

          // $('.mobile-nav-tab').on("click", function () {
          console.log("clickedId ", clickedId);
          $('.mobile-nav-tab').each(function (index = 1) {
            console.log(index);
            console.log("this att= ", $(this).attr("id"));
            if ($(this).attr("id") == clickedId) {

              console.log("Selected Item= ", $(this).attr("id"))
              $('.mobile-nav-tab,.content-item').eq(index).addClass('active');
              $(".content-item").eq(index).show();
              localStorage.removeItem('backPage');
            } else {
              $('.mobile-nav-tab,.content-item').eq(index).removeClass('active');
              $(".content-item").eq(index).hide();
            }
          });
        });

      }, 1000);
    }
    // else
    // {

    // }


    // window['plugins'].spinnerDialog.show("Loading","Loading...");
    // setTimeout(function(){
    //     window['plugins'].spinnerDialog.hide();
    // }, 1000);
    this.commonService.searchNewsNew.subscribe((res: any) => {
      // console.log("dddddddddddd==========", res.m_Item1);

      let mainDiv = document.getElementById("div1");
      let searchDiv = document.getElementById("div2");

      if (res == null) {
        console.log("this is data not null::", res)
        mainDiv.style.display = "inline";
        searchDiv.style.display = "none";
      }
      else {

        this.getSearchData = res.m_Item1.sort(function (a, b) { return new Date(b.StartDateUtc).getTime() - new Date(a.StartDateUtc).getTime() })
        for (let i = 0; i < this.getSearchData.length; i++) {
          this.getSearchData[i].NewsImglink = this.getSearchData[i].NewsImglink.replace(this.getSearchData[i].NewsImglink.substring(this.getSearchData[i].NewsImglink.indexOf('/api'), this.getSearchData[i].NewsImglink.indexOf('/media')), '/');
        }
        // this.getSearchData = res;
        mainDiv.style.display = "none";
        console.log("not empty data");
        searchDiv.style.display = "block";

      }
    }, (err) => console.log(err))



  }

  getAllNewsCatNews(catName: any) {
    this.commonService.getNewsDataClickNav(catName, 0, 10).subscribe((res: any) => {
      // console.log(res);

      this.getCatWiseAllNews = res.m_Item1.sort(function (a, b) { return new Date(b.StartDateUtc).getTime() - new Date(a.StartDateUtc).getTime() })
      // this.newsShowMsg=true;
      var datas = [];
      //   if(this.getCatWiseAllNews.length>4){
      //     for(let i=0;i<4;i++){
      //       this.getCatWiseAllNews[i].NewsImglink = this.getCatWiseAllNews[i].NewsImglink.replace(this.getCatWiseAllNews[i].NewsImglink.substring(this.getCatWiseAllNews[i].NewsImglink.indexOf('/api'),this.getCatWiseAllNews[i].NewsImglink.indexOf('/media')),'/');

      //       datas.push(this.getCatWiseAllNews[i])
      //     }
      // }else{
      //   for(let i=0;i<this.getCatWiseAllNews.length;i++){
      //     this.getCatWiseAllNews[i].NewsImglink = this.getCatWiseAllNews[i].NewsImglink.replace(this.getCatWiseAllNews[i].NewsImglink.substring(this.getCatWiseAllNews[i].NewsImglink.indexOf('/api'),this.getCatWiseAllNews[i].NewsImglink.indexOf('/media')),'/');

      //   }
      //   datas=this.getCatWiseAllNews;
      // }
      this.allCatNewsList[catName] = datas;
    }, (err) => console.log(err))
  }




  getNewsCat(catName: any) {

    this.page = 0;
    this.clickCatNews = catName;
    this.activeClass = catName;
    // console.log("catName===",catName);
    localStorage.setItem("catName", catName);
    localStorage.setItem("backPage", catName);

    this.commonService.getNewsDataClickNav(catName, 0, 10).subscribe((res: any) => {
      // console.log(res);

      this.getCatWiseAllNews = res.m_Item1.sort(function (a, b) { return new Date(b.StartDateUtc).getTime() - new Date(a.StartDateUtc).getTime() })
      for (let i = 0; i < this.getCatWiseAllNews.length; i++) {
        this.getCatWiseAllNews[i].NewsImglink = this.getCatWiseAllNews[i].NewsImglink.replace(this.getCatWiseAllNews[i].NewsImglink.substring(this.getCatWiseAllNews[i].NewsImglink.indexOf('/api'), this.getCatWiseAllNews[i].NewsImglink.indexOf('/media')), '/');

      }
      this.newsShowMsg = true;
      //  console.log(this.getCatWiseAllNews);
      // this.minibiotech = res.pipe(take(5));
      // this.subscribeBiotech = this.minibiotech.subscribe(val => console.log(val));
    }, (err) => console.log(err))


    // console.log(catName);



    $(document).ready(function () {

      let clickedId: any;
      clickedId = localStorage.getItem('backPage');
      this.activeClass = localStorage.getItem('backPage');
      $('.mobile-nav-tab').on("click", function () {
        clickedId = catName;
        $('.mobile-nav-tab').each(function (index) {
          console.log($(this).attr("id"));
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


    document.getElementsByClassName('first_slider')[0].scrollLeft = 0;

    var menus = document.getElementsByClassName(
      'newClassItem',
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(menus);
    setTimeout(() => {

      for (var i = 0; i < menus.length; i++) {

        if (menus[i].classList.contains('active-link')) {

          document.getElementsByClassName('first_slider')[0].scrollLeft = menus[i].offsetLeft - 75;
        }
      }
    }, 1500)

    // this.commonService.getNewsDataClickNav(catName).subscribe((res:any)=>{
    //   console.log(res);
    //   this.getNewsCat=res;
    // },(err)=>console.log(err))

  }

  myactive(val: any) {
    this.activeClass = val;
  }
  newsData(id: any) {

    this.route.navigate(['//allnews/Newsdetail'], { queryParams: { id: id } });
    // this.route.navigate(['/allnews/Newsdetail']);
    // console.log(id);

  }

  // date diff
  calcDate(newsDate) {
    let currentTime = new Date().getTime()
    let newsTime = new Date(newsDate.StartDateUtc).getTime()
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
    let newsTime = new Date(key.StartDateUtc).getTime()
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


  share(i:any){
    console.log(i)
    this.share1=i;
  }

  goBack() {

    console.log("goback")
    localStorage.removeItem('backPage');
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.route.onSameUrlNavigation = 'reload';
    this.commonService.setSearchNews(null);
    this.route.navigate(['/allnews']);



  }

  logout() {
    console.log("logout");
    sessionStorage.setItem('redirectUrl', 'null');
    localStorage.removeItem('token');
    this.route.navigate(['/auth/login']);
  }
  sendMsg() {
    // console.log("dta.....this new")
    var options = {
      message: 'News', // not supported on some apps (Facebook, Instagram)

      files: ['', ''], // an array of filenames either locally or remotely
      url: "https://play.google.com/store/apps/details?id=io.cordova.pharmaClick",
      chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title

    };
    var onSuccess = function (result) {
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
      console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function (msg) {
      console.log("Sharing failed with message: " + msg);
    };

    window['plugins'].socialsharing.shareWithOptions(options, onSuccess, onError);

    //  window['plugins'].CallNumber.callNumber(onSuccess, onError, '8460058030', true);
  }

  moveToPrivacy() {
    this.route.navigate(['/privacyPolicy']);
  }
  // [Dipak Ahirav][13-Oct-2022] - Save data of news
  saveNews(id) {
    var remoovedId;
    this.allNewsSaved.forEach(ele => {
      if (ele.ItemId === id) {
        remoovedId = ele.Id
      }
    })
    if (this.allSavedNews.includes(id)) {
      this.commonService.deleteSavedItem(remoovedId).subscribe(data => {
        this.commonService.viewAllSavedNews(this.userData.CompanyId, "News").subscribe((res: any) => {
          // console.log(res);
          this.allSavedNews = [];
          res.Getnews.forEach(ele => {
            this.allSavedNews.push(ele.Id);
          })


        }, (err) => console.log(err))
        this.commonService.savedItems(this.userData.CompanyId, "News").subscribe((res: any) => {

          this.allNewsSaved = res

        }, (err) => console.log(err))
      });
    } else {
      this.allSavedNews.push(id)
      var objs = {
        "UserId": this.userData.CompanyId,
        "ItemName": "News",
        "ItemId": id
      }
      // console.log(variab.Id);

      this.commonService.saveEvents(objs).subscribe(data => {
        // this.savaEventData =data;
        // console.log("res",data);
        this.savedCompany = true;
        this.commonService.savedItems(this.userData.CompanyId, "News").subscribe((res: any) => {

          this.allNewsSaved = res

        }, (err) => console.log(err))


      });
    }
    // console.log("saveE");

  }

  getElement() {
    console.log('.....', document.querySelector('.first'));
    return document.querySelector('.first');
  }

  renderDynamicInputs() {
    this.showBtns = true;
  }
  FeaturedCompanies() {
    this.showBtns = true;
  }


}
