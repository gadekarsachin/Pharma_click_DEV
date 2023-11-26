import { Component, OnInit} from '@angular/core';
declare var device;
// declare var spinnerDialog:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pharmaclick';

  ngOnInit() {
    // document.addEventListener("deviceready", function() {
    // alert(device.platform);
    // }, false);

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady(){     

      document.addEventListener("backbutton", function(e) {
        e.preventDefault();
        console.log("this is location:::",window.location.pathname)
        if((window.location.pathname=='/profile') || (window.location.pathname=='/notifications')
        || (window.location.pathname.includes('/company-data'))

        || (window.location.pathname.includes('/allnews/Newsdetail'))
        || (window.location.pathname.includes('/events/event-details'))
        || (window.location.pathname.includes('/blogs/blogsdetail'))
        || (window.location.pathname.includes('/blogs/author'))
        || (window.location.pathname.includes('/home/company/company-details'))
        || (window.location.pathname.includes('/GetSaveItem/Company'))
        || (window.location.pathname.includes('/GetSaveItem/News'))
        || (window.location.pathname.includes('/GetSaveItem/Events'))
        || (window.location.pathname.includes('/privacyPolicy'))
        || (window.location.pathname.includes('/auth/change-password'))
        || (window.location.pathname.includes('/contact'))
        || (window.location.pathname.includes('/auth/forgot-password'))
        || (window.location.pathname.includes('/auth/register'))
        || (window.location.pathname.includes('/auth/terms-condition'))
        || (window.location.pathname.includes('/allinfo'))
        || (window.location.pathname.includes('/alert'))
        || (window.location.pathname.includes('/all-section'))


        )
        {
          history.go(-1);
         
        }else
        {
          if(confirm("Do you want to exit ?")) {
            (navigator as any).app.exitApp();
          }
        }
      }, false);
  }



  }
 

}
