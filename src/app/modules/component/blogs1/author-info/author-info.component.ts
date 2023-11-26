import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/shared/blogs';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {

  blogAthourId: any = Blogs;
  athourList: any;
  constructor(private location: Location, private activatedRoute: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit(): void {

    // document.addEventListener("backbutton", onBackKeyDown, false);  
    // function onBackKeyDown(e) { 
    //  history.go(-1);
    // (navigator as any).app.backHistory();
    // }

    this.activatedRoute.queryParamMap.subscribe(data => {
      this.blogAthourId = data.get('id');
      // console.log("blogAthourId",data['id']);
    });

    // this.apiService.viewBlogDetails(this.blogAthourId).subscribe(viewData =>{
    //   this.athourList = viewData;
    // });

    $(document).ready(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    });




    $('.showSingle').click(function () {
      $('.targetDiv').hide();
      $('.showSingle').removeClass('greenactive');
      $(this).addClass("greenactive")
      $('#div' + $(this).attr('target')).show();
  });




  $(document).ready(function () {
    
    let clickedId:any;
    $('.mobile-nav-tab').on("click", function () {
        clickedId = $(this).attr("id");
        $('.mobile-nav-tab').each(function (index) {
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



   
  }


  goBack(){
    this.location.back();
  }




}
