import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Notifications } from 'src/app/shared/notifications';
import { NotificationCat } from 'src/app/shared/notification-cat';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  nList : any;
  notifCat:any;

  date=new Date();

  constructor(private location: Location,private apiService:ApiService) { }

  ngOnInit(): void {

    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //  history.go(-1);
    // (navigator as any).app.backHistory();
    // }

    this.apiService.getNotifications().subscribe( data => {
      this.nList = data;
    });

    this.apiService.viewNotificationCat().subscribe( data1 => {
      this.notifCat = data1;
    });
  
  }


   // date diff
   calcDate(notifDate){
    let currentTime = new Date().getTime()
    let nTime = new Date(notifDate.WeekTime).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - nTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    // console.log('day',diffDay);
    // console.log('hour', diffHour);

    if(diffDay>=1){
      return diffDay
    }
    else{
      return diffHour
    }
  }

  hourTime(key){
    let currentTime = new Date().getTime()
    let nTime = new Date(key.WeekTime).getTime()
    // console.log(newsDate.publishedAt);
    let time = currentTime - nTime;

    let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

    let diffHour = Math.floor((time%86400000)/3600000);

    if(diffDay>=1){
      return key = "Days ago"
    }
    else{
      return key = "Hours ago"
    }
  }



  goesBack(){
    this.location.back();
  }

}
