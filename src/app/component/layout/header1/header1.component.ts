import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Location } from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  // public classList:string = "";
  // public classSearch:string = "";
  val: any;
  // public profileName: string = 'Dipak Sir';
  // public navTitle:string = 'Category';
  public profileName: string = '';
  public profileData: any;
  classMenu: any;
  basicurl: any;
  dataArr: any = [];
  base64textString: any;
  constructor(private router: Router, private apiSer: ApiService, private locations: Location,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    let tokens = JSON.parse(localStorage.getItem('token'));
    // var s = JSON.parse(tokens);
    this.dataArr.push(tokens);
    console.log("currently login user id", this.dataArr[0].CompanyId);

    this.apiSer.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res: any) => {
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



    // this.apiSer.viewProfile().subscribe((res:any)=>{
    //   // console.log(res);
    //   this.val=res;
    // },(err)=>console.log(err))
  }


  logout() {
    localStorage.removeItem('token');
    sessionStorage.setItem('redirectUrl', 'null');
    console.log("logout");
    this.router.navigate(['/auth/login']);
  }
  moveToPrivacy() {

    this.router.navigate(['/privacyPolicy']);
  }
  profile() {
    //   this.closeNav();
  }

  openMenu() {
    this.basicurl = window.location.pathname;
    console.log("open nav");
    this.classMenu = 'nav--open'
    document.getElementById("main").style.display = "block";

  }

  receiveSearchMesg(event: any) {
    console.log('event is :', event);
    this.classMenu = event;
  }

  closeMenu() {
    this.classMenu = 'customNav'
    // this.toggleEvent.emit(this.classSearch)
  }

  closeNav() {
    document.getElementById("main").style.display = "none";
    // this.router.navigate(['/homepage']);
  }


  redirectToProfile(id: any) {

    this.router.navigate(['/profile'], { queryParams: { id: id } });
    console.log("id in header1", id);

  }

}