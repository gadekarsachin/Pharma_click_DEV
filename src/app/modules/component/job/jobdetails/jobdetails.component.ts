import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  showFullContent = false;
  jobId:any;
  jobdata:any;
  path1:any;
  share1:any;
  redirecturl:any;
  // public userData: any;
  // allJobsSaved: any = [];
  // allSavedJobs: any = [];
  // public savedJobs: boolean = false;
  
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private apiser:ApiService,private location:Location) { }

  ngOnInit(): void {
    this.path1 = window.location.pathname;
    this.redirecturl=window.location.href
  //   this.activatedRoute.queryParamMap.subscribe(data => {
  //     this.jobId = data.get('id');
  //   });

  //   this.apiser.getJobDetailsById(this.jobId).subscribe((res:any)=>{
  //     console.log(res);
  //     this.jobdata=res;
  //   },(err)=>console.log(err))

  //   $(".nav ul li a").click(function(e) {
  //     e.preventDefault();
  //     $('.content > div').addClass('hidden');
  //     $('.nav ul li.active').removeClass('active')
  //     $($(this).attr('href')).removeClass('hidden');
  //     $(this).parent().addClass('active');
  // }); 


  
  this.activatedRoute.queryParamMap.subscribe(data => {
    this.jobId = data.get('id');
  });

  this.apiser.getJobDetailsById(this.jobId).subscribe((res: any) => {
    console.log(res);
    this.apiser.viewJobimg(this.jobId).subscribe((img: any) => [
      res.CompanyImage = img.CompanyImage
    ])
    this.jobdata = res;
  }, (err) => console.log(err))

  $(".nav ul li a").click(function (e) {
    e.preventDefault();
    $('.content > div').addClass('hidden');
    $('.nav ul li.active').removeClass('active')
    $($(this).attr('href')).removeClass('hidden');
    $(this).parent().addClass('active');
  });
  }


  // This Date and time function used for comments date
 getTimeAgo(givenDate) {
   
  let currentTime;
  let givenTime;
    currentTime = new Date();
    givenTime = new Date(givenDate.Date);
   
  const diffInMilliseconds = currentTime - givenTime;

  const diffInSeconds = Math.round(diffInMilliseconds / 1000);
  const diffInMinutes = Math.round(diffInSeconds / 60);
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);

  if (diffInSeconds < 60) {
    return diffInSeconds + " Seconds ago";
  } else if (diffInMinutes < 60) {
    return diffInMinutes + " Minutes ago";
  } else if (diffInHours < 24) {
    return diffInHours + " Hours ago";
  } else {
    return diffInDays + " Days ago";
  }
}

  goBack(){
    this.location.back();
  }
  getId(id: any) {
    this.route.navigate(['job/applyJob'], { queryParams: { id: id } });
  }
  share(i:any){
    console.log(i)
    this.share1=i;
  }
 
}
