import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  banner:any;
  constructor(private apiService: ApiService,private rout:Router) {

    if(localStorage.getItem('token')){
      // return true;
    }else{
      this.rout.navigate(['/auth/login']);
      }
         
      

   }

 

  ngOnInit(): void {

 
    // document.addEventListener("deviceready", onDeviceReady, false);

    // function onDeviceReady(){
    //     document.addEventListener("backbutton", function(e) {
    //         e.preventDefault();
    
    //                 if(confirm("Do you want to exit ?")) {
    //                   (navigator as any).app.exitApp();
    //                 }
    //     }, false);
    // }

    this.apiService.viewsBannerImg().subscribe((res:any)=>{
      console.log(res);
      this.banner=res;
    },(err)=>console.log(err))

//     document.addEventListener("backbutton", onBackKeyDown, false);  
// function onBackKeyDown(e) { 
//   if(window.location.pathname=='/homepage'){
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


// function onDeviceReady(){
//   document.addEventListener("backbutton", function(e){
//       if(window.location.pathname=='/homepage'){
//           e.preventDefault();
//           (navigator as any).notification.confirm("Are you sure you want to exit ?", onConfirm, "Confirmation", "Yes,No"); 
//           (navigator as any).app.exitApp();
//       } else {
//         (navigator as any).app.backHistory()
//       }
//   }, false);
// }
// document.addEventListener("deviceready", onDeviceReady, false);

  
  }

}
