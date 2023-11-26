import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Events } from 'src/app/shared/events';
import { ClipboardService } from 'ngx-clipboard';



declare var $: any;
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit {
  path1: any;
  share1:any;
  month: any;
  year: any;
  monthArr: any = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  public activeClass: any;
  monthList: any = [];
  eventList: any;
  eventId: string;
  eventAllList: any;
  wordLimit: number = 20;
  showMore: boolean = false;
  public allSavedEvents: any = [];
  public userData: any;
  public savedEvent: boolean = false;
  rate: number;
  newRating: any;
  redirecturl:any;
  allEventsSaved: any = []
  constructor(private apiService: ApiService, private route: Router,
    private activatedRoute: ActivatedRoute, private locations: Location,private clipboardService: ClipboardService) { }

  ngOnInit(): void {
    this.redirecturl=window.location.href
    this.activeClass = localStorage.getItem("eventmonth");
    console.log(this.activeClass,"hello");
    this.path1 = window.location.pathname;
    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //  history.go(-1);
    // (navigator as any).app.backHistory();
    // }
    this.monthList = [
      // { "month": "JAN-22" },
      // { "month": "FEB-22" },
      // { "month": "MAR-22" },
      // { "month": "APR-22" },
      // { "month": "MAY-22" },
      // { "month": "JUN-22" },
      // { "month": "JUL-22" },
      // { "month": "AUG-22" },
      // { "month": "SEP-22" },
      // { "month": "OCT-22" },
      // { "month": "NOV-22" },
      // { "month": "DEC-22" },

      { "month": "JAN-23" },
      { "month": "FEB-23" },
      { "month": "MAR-23" },
      { "month": "APR-23" },
      { "month": "MAY-23" },
      { "month": "JUN-23" },
      { "month": "JUL-23" },
      { "month": "AUG-23" },
      { "month": "SEP-23" },
      { "month": "OCT-23" },
      { "month": "NOV-23" },
      { "month": "DEC-23" }
    ];

    var today = new Date();

    var month = today.toLocaleString('default', { month: 'short' });
    var year = today.getFullYear();
    var shortYear = year.toString().substr(-2);
     if(localStorage.getItem("eventmonth")==undefined ||localStorage.getItem("eventmonth") ==null){
      this.activeClass = month.toUpperCase() + "-" + shortYear;
     }
    // this.activeClass = month.toUpperCase() + "-" + shortYear;

    this.userData = JSON.parse(localStorage.getItem("token"));
    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 

    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //   this.router.onSameUrlNavigation = 'reload';
    //   this.router.navigate(['/events']); 
    // }

    // [Dipak Ahirav]
    this.apiService.viewAllSavedNews(this.userData.CompanyId, "Events").subscribe((res: any) => {
      // console.log(res);
      res.Getevents.forEach(ele => {
        this.allSavedEvents.push(ele.Id);
      })


    }, (err) => console.log(err))
    // [Dipak Ahirav]
    this.apiService.savedItems(this.userData.CompanyId, "Events").subscribe((res: any) => {
      // console.log(res);
      this.allEventsSaved = res


    }, (err) => console.log(err))
    // this.activatedRoute.queryParamMap.subscribe(data => {
    //   this.eventId = data.get('id');
    //   console.log("hello",data['id']);
    // })

    this.apiService.viewAllEvents().subscribe(viewData => {
      this.eventAllList = viewData;
      console.log("eventlistsss", viewData)
    });


    // map
    let loader = new Loader({
      apiKey: 'AIzaSyA0hjQ-8ZOm3kiL-2zjXfDcy0AGsZbxjyw'
    })

    loader.load().then(() => {

      new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.233334, lng: 6.78333 },
        zoom: 0
      })
    })


    this.activatedRoute.queryParamMap.subscribe(data => {
      this.eventId = data.get('id');
      console.log("hello", data['id']);
    })

    this.apiService.viewEventDetails(this.eventId).subscribe(viewData => {
      this.eventList = viewData;
      console.log("Hi");
      this.newRating = Math.round(this.eventList.EventPriority * 100);
      this.newRating = (this.newRating / 100).toFixed(1);
      console.log("newRating", this.newRating)
    });
    // window.location.reload();


    // allevent slider

    ($('#owl-carousel') as any).owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      items: 1,
    })


  }
  // copyLink() {
  //   this.clipboardService.copyFromContent(window.location.href);
    
  // }


  
  share(i:any){
    console.log(i)
    this.share1=i;
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
  searchEventByMonth(var1: any) {
    console.log(":rrrr:", var1);
    this.activeClass = var1.month;
    let splitedString = var1.month.toString().split('-');
    console.log(splitedString[0], splitedString[1]);

    let m = splitedString[0];
    let month1 = m.toLowerCase();
    // console.log(month1);
    this.month = this.monthArr.indexOf(month1);
    this.month = this.month + 1;

    console.log("hhhhhh:", this.month);

    this.year = 2000 + parseInt(splitedString[1]);

    this.apiService.viewAllEventsByMonths(this.month, this.year).subscribe(data => {
      this.eventList = data;
      // this.router.navigate(['../events/event-list/'], { queryParams: { id: var1 } });
    });

  }
  eventData(id: any) {
    this.apiService.viewEventDetails(id).subscribe((res: any) => {
      console.log(res);
      this.eventList = res;
      this.share=res.Name;
    }, (err) => console.log(err));
  }

  goBack() {
    this.locations.back();
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

  saveEventD(variab: any) {
    // console.log("saveE",variab);
    var remoovedId;
    this.allEventsSaved.forEach(ele => {
      if (ele.ItemId === variab) {
        remoovedId = ele.Id
      }
    })

    if (this.allSavedEvents.includes(variab)) {
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

      this.allSavedEvents.push(variab);
      var objs = {
        "UserId": this.userData.CompanyId,
        "ItemName": "Events",
        "ItemId": variab
      }
      console.log(variab.Id);

      this.apiService.saveEvents(objs).subscribe(data => {

        this.savedEvent = true;
        this.apiService.savedItems(this.userData.CompanyId, "Events").subscribe((res: any) => {

          this.allEventsSaved = res

        }, (err) => console.log(err))
      });
    }
  }

  // ratings
  colorChange(e) {

    document.getElementById("btn1").style.color = "gray";
    document.getElementById("btn2").style.color = "gray";
    document.getElementById("btn3").style.color = "gray";
    document.getElementById("btn4").style.color = "gray";
    document.getElementById("btn5").style.color = "gray";

    if (e == '1') {
      this.rate = 1;
      document.getElementById("btn1").style.color = "orange";
    }
    else if (e == '1' || e == '2') {
      this.rate = 2;
      document.getElementById("btn1").style.color = "orange";
      document.getElementById("btn2").style.color = "orange";
    }
    else if (e == '1' || e == '2' || e == '3') {
      this.rate = 3;
      document.getElementById("btn1").style.color = "orange";
      document.getElementById("btn2").style.color = "orange";
      document.getElementById("btn3").style.color = "orange";
    }
    else if (e == '1' || e == '2' || e == '3' || e == '4') {
      this.rate = 4;
      document.getElementById("btn1").style.color = "orange";
      document.getElementById("btn2").style.color = "orange";
      document.getElementById("btn3").style.color = "orange";
      document.getElementById("btn4").style.color = "orange";
    }
    else {
      this.rate = 5;
      document.getElementById("btn1").style.color = "orange";
      document.getElementById("btn2").style.color = "orange";
      document.getElementById("btn3").style.color = "orange";
      document.getElementById("btn4").style.color = "orange";
      document.getElementById("btn5").style.color = "orange";
    }

  }

  submitRatings(variab: any) {
    console.log("Rating saved", variab);

    let tokens = localStorage.getItem('token');
    var currUSerId = JSON.parse(tokens);
    console.log("need to get id of current user", currUSerId.CompanyId);

    var objs = {
      "UserId": currUSerId.CompanyId,
      "ItemName": "Events",
      "ItemId": variab.Id,
      "Rating": this.rate
    }
    console.log("current event id", variab.Id);

    this.apiService.eventRatings(objs).subscribe(data => {
      // this.savRatingsData =data;
      console.log("res", data);

      this.apiService.viewEventDetails(this.eventId).subscribe(viewData => {
        this.eventList = viewData;
      });

      // window.location.reload();
    });
  }


}

// https://youtu.be/7P5Oj8heApU
