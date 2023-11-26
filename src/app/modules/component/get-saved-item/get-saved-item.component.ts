import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
@Component({
  selector: 'app-get-saved-item',
  templateUrl: './get-saved-item.component.html',
  styleUrls: ['./get-saved-item.component.css']
})
export class GetSavedItemComponent implements OnInit {

  savedItemType:any;
  gettoken:any;
  getuserId:any;
  savedItemList:any;
 
  constructor(private locations:Location,private actRoute:ActivatedRoute,private apiSer:ApiService,
    private router:Router) { 
    this.savedItemType= this.actRoute.snapshot.params['SavedItem'];
    this.gettoken=localStorage.getItem('token');
    this.getuserId=JSON.parse( this.gettoken);
    // console.log(this.getuserId.CompanyId);

    switch (this.savedItemType) {
      case 'Company':
                 this.apiSer.getSavedItem(this.getuserId.CompanyId,this.savedItemType).subscribe((res:any)=>{
                 console.log(res);
               
                 res.GetCompanies.forEach(ele=>{
                  var newRating;
                  newRating = Math.round(ele.Rating*100);
                  ele.Rating = (newRating / 100).toFixed(1);
                 })
                
                 // console.log("newRating",this.newRating);
               
                 this.savedItemList=res.GetCompanies;
                 },(err)=>console.log(err))
        break;
      case 'News':
                this.apiSer.getSavedItem(this.getuserId.CompanyId,this.savedItemType).subscribe((res:any)=>{
                console.log(res);
                this.savedItemList=res.Getnews;
                },(err)=>console.log(err))
        break;
      case 'Events':
                this.apiSer.getSavedItem(this.getuserId.CompanyId,this.savedItemType).subscribe((res:any)=>{
                console.log(res);
                this.savedItemList=res.Getevents;
                },(err)=>console.log(err))
        break;
      
    }

    

    // this.getSavedItemList();
  }

  ngOnInit(): void {
    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //  history.go(-1);
    // (navigator as any).app.backHistory();
    // }
  }

  
  companyData(id:any){
    this.router.navigate(['/company-data'], { queryParams: { id: id } })
    // console.log("Hellow every1", this.companyId);
  }


  newsData(id:any){

    this.router.navigate(['//allnews/Newsdetail'], { queryParams: { id: id } });
    // this.route.navigate(['/allnews/Newsdetail']);
    // console.log(id);

  }

  eventData(id:any){
    this.router.navigate(['/events/event-details'], { queryParams: { id: id } });
    // console.log("evenById", this.eventId);
  }
  
    

  
  // date diff
// calcDate(newsDate){
//   let currentTime = new Date().getTime()
//   let newsTime = new Date(newsDate.StartDateUtc).getTime()
//   // console.log(newsDate.publishedAt);
//   let time = currentTime - newsTime;

//   let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

//   let diffHour = Math.floor((time%86400000)/3600000);
  
//    let diffMin = Math.floor(((time%86400000)%3600000)/ 60000);
  
    
    
  // console.log('day',diffDay);
  // console.log('hour', diffHour);
  //  console.log('MIn', diffMin);

//   if(diffDay>=1){
//     return diffDay
//   }
//   else if(diffDay>=1){
//     return diffHour
//   }
//   else {
//       return diffMin
//   }
// }


calcDate(newsDate){
  let currentTime = new Date().getTime()
  let newsTime = new Date(newsDate.StartDateUtc).getTime()
  // console.log(newsDate.StartDateUtc);
  let time = currentTime - newsTime;

  let diffDay = Math.floor(time/86400000);  //1000 × 60 × 60 × 24

  let diffHour = Math.floor((time%86400000)/3600000);
  
   let diffMin = Math.floor(((time % 86400000) % 3600000)/60000);
  
  // console.log('day diff',diffDay);
  // console.log('hour diff', diffHour);
  //  console.log('MIn diff', diffMin);

  if(diffDay>=1){
    return diffDay
  }
  else if(diffHour>=1 || diffMin== 0){
    return diffHour
  }
  else {
      return diffMin
  }
}


hourTime(key){
let currentTime = new Date().getTime()
let newsTime = new Date(key.StartDateUtc).getTime()
// console.log(newsDate.publishedAt);
let time = currentTime - newsTime;

let diffDay = Math.floor(time / 86400000);;  //1000 × 60 × 60 × 24

let diffHour = Math.floor((time % 86400000) / 3600000);

 let diffMin = Math.floor(((time  % 86400000) % 3600000) / 60000); 

if(diffDay>=1){
  return key = "Days ago"
}
else  if(diffHour>=1 || diffMin== 0) {
  return key = "Hours ago"
}
 else {
     return key = "Minutes ago" 
 }

}

// hourTime(key){
// let currentTime = new Date().getTime()
// let newsTime = new Date(key.StartDateUtc).getTime()
// // console.log(newsDate.publishedAt);
// let time = currentTime - newsTime;

// let diffDay = Math.floor(time / 86400000);;  //1000 × 60 × 60 × 24

// let diffHour = Math.floor((time % 86400000) / 3600000);

//  let diffMin = Math.floor(((time  % 86400000) % 3600000) / 60000); 



// if(diffDay>=1){
//   return key = "Days ago"
// }
// else  if(diffDay>=1) {
//   return key = "Hours ago"
// }
//  else {
//      return key = "Minutes ago" 
//  }

// }

  goesBack()
  {
    this.locations.back();
  }

}
