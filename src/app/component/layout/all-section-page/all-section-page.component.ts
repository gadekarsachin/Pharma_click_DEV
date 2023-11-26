import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { News } from 'src/app/shared/news';

@Component({
  selector: 'app-all-section-page',
  templateUrl: './all-section-page.component.html',
  styleUrls: ['./all-section-page.component.css']
})
export class AllSectionPageComponent implements OnInit {
  path1: any;
  categoryList: any;
  subCategoryList: any;
  productList: any;
  param_subcat: any;
  param_Prod: any;
  var2: any;
  public activeClass: any;
  userData: any;
  dispayData: any = true;
  totalPagecount: any = 0;
  newsList: News;
  newsId: string;
  date = new Date();
  newsMenu: any;
  allNews: any;
  newsCat: any;
  todayNews: any[] = [];
  objToday: any;
  yesterdayNews: any[] = [];
  objYesterDay: any;
  date1 = new Date();
  getfromatdate: any;
  getfromatdate1: any;
  getfromatdateYseDay: any;
  getfromatdateYseDay1: any;
  savedCompany: any;

  getSearchData: any;
  allSavedNews: any = [];
  allNewsSaved: any = []

  getNewsMenu: any;

  eventList: any = [];
  eventId: any;
  allEventsSaved: any;
  allSavedEvents: any;
  public savedEvent: boolean = false;
  monthList: any;
  // public activeClass:any;
  var1: any;
  eventByMonth: any;
  month: any;
  year: any;
  month1: any;
  eventsId: any;
  monthArr: any = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  savaEventData: any;

  blogList: any;


  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {

    this.path1 = window.location.pathname;
    this.userData = JSON.parse(localStorage.getItem("token"));

    this.apiService.changeparentCatId(this.activeClass);

    this.apiService.viewAllCategories().subscribe(data => {
      this.categoryList = data;
    });

    this.apiService.viewAllNewsData(0, 20).subscribe((data: any) => {
      console.log(data);
      this.allNews = data.m_Item1;

    }, (err) => console.log(err))

    this.apiService.viewAllEvents().subscribe(data => {
      this.eventList = data
    })

    this.apiService.viewBlogs(0, 50).subscribe((data: any) => {
      this.blogList = data.m_Item1;
    });

    this.dispayData = false;
    setTimeout(() => {
      this.apiService.viewBlogs(0, 5).subscribe((data: any) => {
        this.totalPagecount = data.m_Item2;

        this.apiService.viewBlogsImage(0, 5).subscribe((img: any) => {

          for (let i = 0; i < data.m_Item1.length; i++) {

            data.m_Item1[i].BlogImglink = img.m_Item1[i].BlogImg;

          }

        });
        console.log("....t.....:", data)
        this.dispayData = true;
        this.blogList = data.m_Item1;
      });
    }, 2000)




    
    this.apiService.viewBlogs(0, 50).subscribe((res: any) => {
      this.blogList = res.m_Item1;
      for (let i = 0; i < this.blogList.length; i++) {
        this.blogList[i].BlogImglink = this.blogList[i].BlogImglink.replace(this.blogList[i].BlogImglink.substring(this.blogList[i].BlogImglink.indexOf('/api'), this.blogList[i].BlogImglink.indexOf('/media')), '/');
      }
      console.log("res", this.blogList);
    });
  }
  redirect(var2) {
    this.activeClass = var2.Id;
    console.log(var2);
    localStorage.setItem('CategoryList', JSON.stringify(var2));
    this.apiService.changeparentCatId(var2.Id);

    this.router.navigate(['/home/product/product-create']);
  }

  newsData(id: any) {

    this.router.navigate(['//allnews/Newsdetail'], { queryParams: { id: id } });
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



  saveNews(id) {
    var remoovedId;
    this.allNewsSaved.forEach(ele => {
      if (ele.ItemId === id) {
        remoovedId = ele.Id
      }
    })
    if (this.allSavedNews.includes(id)) {
      this.apiService.deleteSavedItem(remoovedId).subscribe(data => {
        this.apiService.viewAllSavedNews(this.userData.CompanyId, "News").subscribe((res: any) => {
          // console.log(res);
          this.allSavedNews = [];
          res.Getnews.forEach(ele => {
            this.allSavedNews.push(ele.Id);
          })


        }, (err) => console.log(err))
        this.apiService.savedItems(this.userData.CompanyId, "News").subscribe((res: any) => {

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

      this.apiService.saveEvents(objs).subscribe(data => {
        // this.savaEventData =data;
        // console.log("res",data);
        this.savedCompany = true;
        this.apiService.savedItems(this.userData.CompanyId, "News").subscribe((res: any) => {

          this.allNewsSaved = res

        }, (err) => console.log(err))


      });
    }
  }

  eventData(id: any) {
    this.router.navigate(['/events/event-details'], { queryParams: { id: id } });
    console.log("evenById", this.eventId);
  }

  // save events
  saveEventD(variab: any) {
    // console.log("saveE",variab);
    var remoovedId;
    this.allEventsSaved.forEach(ele => {
      if (ele.ItemId === variab.Id) {
        remoovedId = ele.Id
      }
    })

    if (this.allSavedEvents.includes(variab.Id)) {
      this.apiService.deleteSavedItem(remoovedId).subscribe(data => {
        this.apiService.viewAllSavedNews(this.userData.CompanyId, "Events").subscribe((res: any) => {
          // console.log(res);
          this.allSavedEvents = [];
          res.Getevents.forEach(ele => {
            this.allSavedEvents.push(ele.Id);
          })


        }, (err) => console.log(err))
        this.apiService.savedItems(this.userData.CompanyId, "Events").subscribe((res: any) => {

          this.allEventsSaved = res

        }, (err) => console.log(err))
      });
    } else {

      this.allSavedEvents.push(variab.Id);
      var objs = {
        "UserId": this.userData.CompanyId,
        "ItemName": "Events",
        "ItemId": variab.Id
      }
      // console.log(variab.Id);

      this.apiService.saveEvents(objs).subscribe(data => {
        // this.savaEventData =data;
        // console.log("res",data);
        // this.alert=true;
        this.savedEvent = true;
        this.apiService.savedItems(this.userData.CompanyId, "Events").subscribe((res: any) => {

          this.allEventsSaved = res

        }, (err) => console.log(err))
      });
    }
  }
  sendMsg() {
    // console.log("dta.....this new")
    var options = {
      message: 'Event', // not supported on some apps (Facebook, Instagram)

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


  blogsData(id: any) {
    this.router.navigate(['blogs/blogsdetail'], { queryParams: { id: id } });
    // console.log("Hellow every1", this.newsId);
  }

}
