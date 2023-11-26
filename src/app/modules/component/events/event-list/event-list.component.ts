// import { google } from '@agm/core/services/google-maps-types';
import { getLocaleMonthNames } from '@angular/common';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { ApiService } from 'src/app/modules/shared/services/api.service';
// import { Events } from 'src/app/shared/events';
import * as introJs from 'intro.js/intro.js';
import { DomSanitizer } from '@angular/platform-browser';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  path1: any;
  share1:any;
  classMenu: any;
  eventList: any = [];
  eventId: number;
  monthList: any;
  public activeClass: any;
  eventByMonth: any;
  month: any;
  year: any;
  month1: any;
  eventsId: any;
  monthArr: any = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  savaEventData: any;
  public allSavedEvents: any = [];
  public classList: string = "";
  public classSearch: string = "";
  public savedEvent: boolean = false;
  public userData: any;
  variab: any;
  alert: boolean;
  allEventsSaved: any = []
  public profileName: string = '';
  public profileData: any;
  getSearchData: any;
  introJS = introJs();
  showBtns: boolean = false;
  inputs = [];
  buttonTypes = ['One', 'Two'];
  base64textString: any;
  dataArr: any = [];

  constructor(private apiService: ApiService, private router: Router,
    private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer,private clipboardService: ClipboardService) {
    if (localStorage.getItem('token')) {
      // return true;
    } else {
      this.router.navigate(['/auth/login']);
    }
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
  ngOnInit(): void {

    this.path1 = window.location.pathname;
    this.introJS.setOptions({
      steps: [
        {

          title: 'Application Tour..?',
          element: document.querySelector('.btnShow'),
          intro: 'Click on Next to view the application tour'
        },
        {
          title: 'Map',
          element: document.querySelector('.stepOne'),
          intro: 'Click on map to view the event locations'
        },
        {

          title: 'Events by Months',
          element: document.querySelector('.stepTwo'),
          position: 'bottom',
          intro: 'Select the months to view events'
        },

        {
          title: 'Event list',
          element: document.querySelector('.stepThree'),
          intro: 'Click on the event to view detailed information about event'
        }

      ],
      showProgress: true,
      disableInteraction: false
    });

    //   setTimeout(() => {
    //     // window.location.reload();
    //   this.introJS.start();
    //   this.introJS.onbeforechange((targetElement) => {
    //   console.log("new step");
    //   this.introJS.refresh();

    // });
    //   }, 1000)

    //     document.addEventListener("deviceready", onDeviceReady, false);

    // function onDeviceReady(){
    //     document.addEventListener("backbutton", function(e) {
    //         e.preventDefault();

    //                 if(confirm("Do you want to exit ?")) {
    //                   (navigator as any).app.exitApp();
    //                 }
    //     }, false);
    // }

    let tokens = JSON.parse(localStorage.getItem('token'));
    // var s = JSON.parse(tokens);
    this.dataArr.push(tokens);
    console.log("currently login user id", this.dataArr[0].CompanyId);

    this.apiService.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res: any) => {
      // this.base64textString = res.FileContents; 
      this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);
    });

    this.userData = JSON.parse(localStorage.getItem("token"));
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
    ]
    // [START]  [Dipak Ahirav][12-Oct-2022] - Set Active month
    var today = new Date();

    var month = today.toLocaleString('default', { month: 'short' });
    var year = today.getFullYear();
    var shortYear = year.toString().substr(-2);

    this.activeClass = month.toUpperCase() + "-" + shortYear;

    var monthCount = today.getMonth();
    // [END]  [Dipak Ahirav][12-Oct-2022] - Set Active Month

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

    this.apiService.viewAllEventsByMonths(monthCount + 1, year).subscribe(data => {
      this.eventList = data;
     
     

      // this.router.navigate(['../events/event-list/']);
    });



    // [START]  [Dipak Ahirav][12-Oct-2022] - Show Active menu on screen
    document.getElementsByClassName('first_slider')[0].scrollLeft = 0;

    var menus = document.getElementsByClassName(
      'newClassItem',
    ) as HTMLCollectionOf<HTMLElement>;

    setTimeout(() => {

      for (var i = 0; i < menus.length; i++) {

        if (menus[i].classList.contains('active-link')) {

          document.getElementsByClassName('first_slider')[0].scrollLeft = menus[i].offsetLeft;
        }
      }
    }, 1000)

    // [END] [Dipak Ahirav][12-Oct-2022] - Show Active menu on screen


    //     document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //   if(window.location.pathname=='/events/events/event-list'){
    //    e.preventDefault(); 
    //    (navigator as any).notification.confirm("Are you sure you want to exit ?", onConfirm, "Confirmation", "Yes,No"); 
    //  alert('Back Button is Pressed!'); 
    // }
    // else
    // {
    //   (navigator as any).app.backHistory(); 
    // }
    // }
    // function onConfirm(button) {
    //   if(button==1){
    //If User selected Yes, then exit app
    // (navigator as any).app.backHistory();
    //   (navigator as any).app.exitApp();
    // } else  {
    //     return;
    // }  
    // }




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


    // this.apiService.viewAllEvents().subscribe(data => {
    //   this.eventList = data
    // })
    // [Dipak Ahirav][Comment For now]
    // this.apiService.viewEventMonthList().subscribe(res => {
    //   this.monthList = res;
    // });



    // this.activatedRoute.queryParamMap.subscribe(data => {
    //   this.eventsId = data.get('id');
    //   // console.log("month list",data['id']);
    // });

    // save functionality
    // var saveObj = new Events();
    // saveObj.CompanyId = 1,
    // saveObj.Id = 5,
    // saveObj.Name = 'CPHI: JOIN THE WORLD’S LEADING PHARMA EVENT'



    // map
    // let loader = new Loader({
    //   apiKey:'AIzaSyA0hjQ-8ZOm3kiL-2zjXfDcy0AGsZbxjyw'
    // })

    // loader.load().then(()=>{

    //   new google.maps.Map(document.getElementById("map"),{
    //     center:{lat:51.233334,lng:6.78333},
    //     zoom:0  
    //   })
    // })


    this.apiService.searchEventNew.subscribe((res: any) => {
      console.log(",,,,ddddd,,,,,,,,,:", res);
      let mainDiv = document.getElementById("div1");
      let searchDiv = document.getElementById("div2");

      if (res == null) {
        console.log("......sssss.....sss")
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

  }


  share(i:any){
    console.log(i)
    this.share1=i;
  }
  goBack() {

    console.log("goback")
    // let mainDiv = document.getElementById("div1");
    // let searchDiv = document.getElementById("div2");


    // mainDiv.style.display = "inline";
    // searchDiv.style.display = "none";
    this.apiService.setSearchEvent(null);
    localStorage.removeItem('backPage');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/events/events/event-list']);



  }

  profile() {
    //   this.closeNav();
  }


  logout() {
    sessionStorage.setItem('redirectUrl', 'null');
    console.log("logout");
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
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

  receiveMessage(event) {
    console.log('event is :', event);
    this.classList = event;
  }


  openSearch() {
    this.classSearch = 'nav--open'
  }

  receiveSearchMesg(event: any) {
    console.log('event is :', event);
    this.classSearch = event;
  }




  eventData(id: any) {
    this.router.navigate(['/events/event-details'], { queryParams: { id: id } });
    console.log("evenById", this.eventId);
  }


  // events by months

  searchEventByMonth(var1: any) {
    console.log(":rrrr:", var1);
    this.activeClass = var1.month;
    localStorage.setItem("eventmonth",var1.month);
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
        this.alert = true;
        this.savedEvent = true;
        this.apiService.savedItems(this.userData.CompanyId, "Events").subscribe((res: any) => {

          this.allEventsSaved = res

        }, (err) => console.log(err))
      });
    }
  }

  closeAlert() {
    this.alert = false;
  }

  //    changeIcon = function(icon) {
  //     // icon.classList.toggle('fa-times')
  // }
  // changeColorIcon(){
  //   document.getElementById('changeColor').style.color="blue";
  // }


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

  moveToPrivacy() {
    this.router.navigate(['/privacyPolicy']);
  }
  // appTour
  getElement() {
    console.log('.....', document.querySelector('.btnShow'));
    return document.querySelector('.btnShow');
  }
  renderDynamicInputs() {
    this.showBtns = true;
  }
  // FeaturedCompanies(){
  //   this.showBtns = true;
  // }

  // renderInputs(buttonType: string){
  //   switch(buttonType.toUpperCase()){
  //     case 'ONE':
  //       this.inputs = ['stepOne'];
  //       break;
  //     case 'TWO':
  //       this.inputs = ['stepOne','stepTwo'];
  //       break;
  //     case 'THREE':
  //       this.inputs = ['stepOne','stepTwo', 'stepThree'];
  //       break;
  //     default:
  //       this.inputs = [];
  //       break;
  //   }
  // }

}
