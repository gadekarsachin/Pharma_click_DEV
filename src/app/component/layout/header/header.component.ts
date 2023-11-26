import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public classList: string = "";
  public classSearch: string = "";
  public profileName: string = '';
  public profileData: any;

  classMenu: any;
  // matchUrl: any = localStorage.getItem('searchPathValue');
  // matchUrl: any;
  matchUrl = window.location.pathname;
  // console.log("match", this.matchUrl);

  dataArr: any = [];
  base64textString: any;

  constructor(private router: Router, private location: Location, private apiService: ApiService,
    private sanitizer: DomSanitizer) { }
  basicurl: any = 'home/product/product-create';
  ngOnInit(): void {

    // this.matchUrl = window.location.pathname;
    // console.log("match", this.matchUrl);
    // this.matchUrl = 'home/product/product-create';
    let tokens = JSON.parse(localStorage.getItem('token'));
    // var s = JSON.parse(tokens);
    this.dataArr.push(tokens);
    // console.log("currently login user id",this.dataArr[0].CompanyId);

    this.apiService.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res: any) => {
      // this.base64textString = res.FileContents; 
      this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);
    });

    $('.feat-btn').click(function () {
      $('.nav__links ul .feat-show').toggleClass("show");
      $('.nav__links ul .first').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });

    $('.feat-btn1').click(function () {
      $('.nav__links ul .feat-show1').toggleClass("show1");
      $('.nav__links ul .first1').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
    });

    this.profileData = JSON.parse(localStorage.getItem('token'));
    this.profileName = this.profileData.FirstName + " " + this.profileData.LastName;
    // console.log(this.router.url);
    // this.basicurl="home/product/category";

    $('.sub-menu ul').hide();
    $(".sub-menu a").click(function () {
      $(this).parent(".sub-menu").children("ul").slideToggle("100");
      $(this).find(".right").toggleClass(" fa-solid fa-angle-right fa-solid fa-angle-down");
    });


  }

  profile() {
    //   this.closeNav();
  }

  openMenu() {
    this.basicurl = window.location.pathname;
    this.classMenu = 'nav--open';
    document.getElementById("sideNavClose").style.display = "block";

  }

  closeMenu() {
    this.classMenu = 'customNav'
    // this.toggleEvent.emit(this.classSearch)
  }
  closeNav() {
    document.getElementById("sideNavClose").style.display = "none";
  }
  moveToPrivacy() {
    this.router.navigate(['/privacyPolicy']);
  }
  logout() {
    localStorage.removeItem('token');
    sessionStorage.setItem('redirectUrl', 'null');
    // console.log("logout");
    this.router.navigate(['/auth/login']);
  }



  receiveMessage(event) {
    // console.log('event is :', event);
    this.classList = event;
  }


  openSearch() {
    this.classSearch = 'nav--open';
    this.matchUrl = window.location.pathname;
    // console.log("match", this.matchUrl);
  }

  receiveSearchMesg(event: any) {
    // console.log('event is :', event);
    this.classSearch = event;
  }

  goBack() {
    this.location.back();
  }
}
