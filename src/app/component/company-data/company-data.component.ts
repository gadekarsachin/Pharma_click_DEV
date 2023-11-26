import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { Product } from 'src/app/shared/product';
// import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { data } from 'jquery';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css'],
  providers: [CallNumber]
})
export class CompanyDataComponent implements OnInit {
  path1: any;
  share:any;
  shareId:any;
  categoryList: any;
  displayBlock: boolean = false;
  companyId: any;
  companyData: any;
  public userData: any;
  public classList: string = "";
  public savedCompany: boolean = false;
  public allSavedCompany: any = [];
  variab: any;
  rate: number = 0;
  dataArr: [];
  newRating: any;
  allCompanySaved: any = []
  imagePath: any;
  drug: any;
  fda: any;
  mfg: any;
  gmp: any;
  alldoc: any;
  othercertif: any;
  wordLimit: number = 20;
  showMore: boolean = false;
  productDetail: any;
  activeClass: any;
  ratedCompanyList: any;
  redirecturl:any;
  


  
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private callNumber: CallNumber,
    private locations: Location, private router: Router, private http: HttpClient) { }


  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }



  ngOnInit(): void {
   console.log("hello",window.location.href)
   this.redirecturl=window.location.href
    this.path1 = window.location.pathname;
    this.apiService.viewAllCategories().subscribe(data => {
      this.categoryList = data;
    }, (err) => console.log(err));
    this.userData = JSON.parse(localStorage.getItem("token"));


    // highlight currently active section
    //   $(document).ready(function(){
    //     // console.log(".........oooo")
    //   $('.Parent_Div').scroll(function() {
    //     // console.log("....thisn iss sadsas ew")
    //       var scrollDistance = $('.Parent_Div').scrollTop()+130;
    //   //
    //       $('.page-section').each(function(i) {
    //           if ($(this).position().top <= scrollDistance) {
    //               $('.info_nav ul li a.active').removeClass('active');
    //               $('.info_nav ul li a').eq(i).addClass('active');
    //           }
    //       });
    //   }).scroll();
    // });
    // [Dipak ahirav][21-Oct2022] - Ne saved item arra
    this.apiService.savedItems(this.userData.CompanyId, "Company").subscribe((res: any) => {
      // console.log(res);
      this.allCompanySaved = res


    }, (err) => console.log(err))
    // // [Dipak ahirav][21-Oct2022] - Ne saved item arra
    // [Dipak Ahirav]
    this.apiService.viewAllSavedNews(this.userData.CompanyId, "Company").subscribe((res: any) => {
      // console.log(res);
      res.GetCompanies.forEach(ele => {
        this.allSavedCompany.push(ele.CompanyId);
      })


    }, (err) => console.log(err))
    // [Dipak Ahirav]

    // $(document).ready(function(){
    //   $('ul li a').click(function(){
    //     $('li a').removeClass("active");
    //     $(this).addClass("active");
    // });
    // });


    this.activatedRoute.queryParamMap.subscribe(data => {
      this.companyId = data.get('id');
      console.log("this.companyId", this.companyId);
    })

    localStorage.setItem('this.companyId', JSON.stringify(this.companyId));

    // companyImg

    this.apiService.ViewCompanyImg(this.companyId).subscribe((res: any) => {
      // console.log(res);
      this.imagePath = res;
    }, (err) => console.log(err))



    this.apiService.viewAllCompanyinfo(this.companyId).subscribe((res: any) => {
      this.companyData = res;
      this.share=res.Company;
      this.shareId=res.CompanyId;

      if (this.companyData.AboutCompany !== null && this.companyData.AboutCompany !== '') {
        this.currentSection = 'section1';
      } else if (this.companyData.Products !== null && this.companyData.Products !== '') {
        this.currentSection = 'section2';
      } else if (this.companyData.FDACertificate !== null && this.companyData.FDACertificate !== '' || this.companyData.DrugLicense !== null && this.companyData.DrugLicense !== '' || this.companyData.MFGLicense !== null && this.companyData.MFGLicense !== '' || this.companyData.GMPLicense !== null && this.companyData.GMPLicense !== '' || this.companyData.OtherCertificate !== null && this.companyData.OtherCertificate !== '') {
        this.currentSection = 'section3';
      }
      else if (this.companyData.ContactPersonName !== null && this.companyData.ContactPersonName !== '' || this.companyData.ContactPersonDesignation !== null && this.companyData.ContactPersonDesignation !== '' || this.companyData.CompanyAddress !== null && this.companyData.CompanyAddress !== '' || this.companyData.MobileNumber !== null && this.companyData.MobileNumber !== '' || this.companyData.Email !== null && this.companyData.Email !== '') {
        this.currentSection = 'section3';
      }


      // console.log(this.companyData.FDACertificate);

      // console.log("",this.companyData.Rating);
      if (this.companyData.FDACertificate != "" && (this.companyData.FDACertificate != null)) {
        this.apiService.ViewCompanycertificate(this.companyData.CompanyId, "FDACertificate").subscribe((res: any) => {

          // console.log("FDA",res);
          this.fda = res;
          this.alldoc = "data:{{fda.ContentType}};base64,{{fda.FileContents}}";
        }, (err) => console.log(err))
      }
      else {
        // console.log("No Certificate Found")
      }
      if ((this.companyData.DrugLicense != "") && (this.companyData.DrugLicense != null)) {
        this.apiService.ViewCompanycertificate(this.companyData.CompanyId, "DrugLicense").subscribe((res: any) => {
          // console.log("Drug",res);
          this.drug = res;
        }, (err) => console.log(err))
      }
      else {
        // console.log("No Certificate Found")
      }
      if ((this.companyData.MFGLicense != "") && (this.companyData.MFGLicense != null)) {
        this.apiService.ViewCompanycertificate(this.companyData.CompanyId, "MFGLicense").subscribe((res: any) => {
          // console.log(res); 
          this.mfg = res;
        }, (err) => console.log(err))
      }
      else {
        // console.log("No Certificate Found")
      }
      if ((this.companyData.GMPLicense != "") && (this.companyData.GMPLicense != null)) {
        this.apiService.ViewCompanycertificate(this.companyData.CompanyId, "GMPLicense").subscribe((res: any) => {
          // console.log(res);  
          this.gmp = res;
        }, (err) => console.log(err))
      }
      else {
        // console.log("No Certificate Found")
      }
      if ((this.companyData.OtherCertificate != "") && (this.companyData.OtherCertificate != null)) {
        this.apiService.ViewCompanycertificate(this.companyData.CompanyId, "OtherCertificate").subscribe((res: any) => {
          // console.log(res); 
          this.othercertif = res;
        }, (err) => console.log(err))
      }
      else {
        // console.log("No Certificate Found")
      }


      this.newRating = Math.round(this.companyData.Rating * 100);
      // this.newRating = this.newRating / 100;
      this.newRating = (this.newRating / 100).toFixed(1);
      // console.log("newRating",this.newRating)

    }, (err) => console.log(err))


    let postUrl = document.location.href;


    // floating butoon
    document.querySelector('.fab').addEventListener('click', function (e) {
      document.querySelector('.box').classList.toggle('box-active');
      document.querySelector('.fab').classList.toggle('fab-active');

    });

    // floating butoon
    //    document.querySelector('.fab1').addEventListener('click', function(e) {
    //     document.querySelector('.box1').classList.toggle('box1-active');
    //     document.querySelector('.fab1').classList.toggle('fab1-active');

    // });
    window['plugins'].spinnerDialog.show("Loading", "Loading...");
    setTimeout(function () {
      window['plugins'].spinnerDialog.hide();
    }, 5000);

  }

  productInfo(id: any) {
    // console.log("id=",id);
    this.displayBlock = true;
    this.apiService.productById(id).subscribe((res: any) => {
      // console.log(res);
      this.productDetail = res;
      ($('#myModal') as any).modal('show');
    }, (err) => console.log(err))

  }
  myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  openPDFv2() {
    console.log('open pdf v2 clicked');
    const container = document.querySelector('#container');
    const tempLink = document.createElement('a');
    tempLink.href = `data:application/pdf;base64,${this.fda.FileContents}`;
    tempLink.setAttribute('download', 'my-fancy.pdf');
    // console.log('click now!', tempLink.click);
    //container.append(tempLink);
    tempLink.click();
  }

  openPDFv3() {
    console.log('open pdf v2 clicked');
    const container = document.querySelector('#container');
    const tempLink = document.createElement('a');
    tempLink.href = `data:application/pdf;base64,${this.drug.FileContents}`;
    tempLink.setAttribute('download', 'my-fancy.pdf');
    // console.log('click now!', tempLink.click);
    //container.append(tempLink);
    tempLink.click();
  }

  openPDFv4() {
    console.log('open pdf v2 clicked');
    const container = document.querySelector('#container');
    const tempLink = document.createElement('a');
    tempLink.href = `data:application/pdf;base64,${this.mfg.FileContents}`;
    tempLink.setAttribute('download', 'my-fancy.pdf');
    // console.log('click now!', tempLink.click);
    //container.append(tempLink);
    tempLink.click();
  }

  openPDFv5() {
    console.log('open pdf v2 clicked');
    const container = document.querySelector('#container');
    const tempLink = document.createElement('a');
    tempLink.href = `data:application/pdf;base64,${this.gmp.FileContents}`;
    tempLink.setAttribute('download', 'my-fancy.pdf');
    // console.log('click now!', tempLink.click);
    //container.append(tempLink);
    tempLink.click();
  }

  openPDFv6() {
    console.log('open pdf v2 clicked');
    const container = document.querySelector('#container');
    const tempLink = document.createElement('a');
    tempLink.href = `data:application/pdf;base64,${this.othercertif.FileContents}`;
    tempLink.setAttribute('download', 'my-fancy.pdf');
    // console.log('click now!', tempLink.click);
    //container.append(tempLink);
    tempLink.click();
  }





  openMenu() {
    this.classList = 'nav--open'
  }


  goBack() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home/product/product-create']);
  }

  redirect(var2) {
    this.activeClass = var2.Id;
    console.log("CategoryList", var2);
    localStorage.setItem('CategoryList', JSON.stringify(var2));
    this.apiService.changeparentCatId(var2.Id);

    // this.apiService.viewAllsubCategories(var2.Id).subscribe((res:any)=>{
    //   // console.log(res);
    //   this.subCategoryList=res;            
    //   this.param_subcat=res;
    //   this.apiService.changeParam(this.param_subcat);
    // },(err)=>console.log(err))

    // // this.apiService.viewAllProduct(var2.Id).subscribe((res:any)=>{
    // //   console.log(res);
    // //   this.param_Prod=res;
    // this.apiService.changeParamProd(this.param_Prod);
    // // },(err)=>console.log(err))


    this.router.navigate(['/home/product/product-create']);
  }


  // shareData: {
  //   url: string;
  //   // description?: string;
  //   // tags?: string;
  // } = {
  //   url: 'https://www.google.com',
  //   // description: 'dev',
  //   // tags: 'hussein Abd Elaziz',
  // };

  sendMsg() {

    var options = {
      message: 'Company', // not supported on some apps (Facebook, Instagram)

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

  callData() {
    // console.log(".....:",this.companyData)
    this.callNumber.callNumber(this.companyData.MobileNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


  // [Dipak Ahirav][13-Oct-2022] - Save data of company
  saveCompany() {

    var remoovedId;
    this.allCompanySaved.forEach(ele => {
      if (ele.ItemId === this.companyData.CompanyId) {
        remoovedId = ele.Id
      }
    })
    if (this.allSavedCompany.includes(this.companyData.CompanyId)) {

      this.apiService.deleteSavedItem(remoovedId).subscribe(data => {
        this.apiService.viewAllSavedNews(this.userData.CompanyId, "Company").subscribe((res: any) => {
          // console.log(res);
          this.allSavedCompany = [];
          res.GetCompanies.forEach(ele => {
            this.allSavedCompany.push(ele.CompanyId);
          })


        }, (err) => console.log(err))
        this.apiService.savedItems(this.userData.CompanyId, "Company").subscribe((res: any) => {
          // console.log(res);
          // this.allCompanySaved=[]
          this.allCompanySaved = res


        }, (err) => console.log(err))

        this.savedCompany = false;

      });


    } else {
      this.allSavedCompany.push(this.companyData.CompanyId);

      var objs = {
        "UserId": this.userData.CompanyId,
        "ItemName": "Company",
        "ItemId": this.companyData.CompanyId
      }
      // console.log(variab.Id);

      this.apiService.saveEvents(objs).subscribe(data => {
        // this.savaEventData =data;
        // console.log("res",data);
        this.savedCompany = true;
        this.apiService.savedItems(this.userData.CompanyId, "Company").subscribe((res: any) => {
          // console.log(res);
          // this.allCompanySaved=[]
          this.allCompanySaved = res


        }, (err) => console.log(err))

      });
    }

  }
  // [Dipak Ahirav][13-Oct-2022] - Save data of company
  userRating() {

    let tokens = localStorage.getItem('token');
    var currUSerId = JSON.parse(tokens);
    console.log("------------------------", currUSerId.CompanyId);
    this.apiService.getRatedCompanies(currUSerId.CompanyId).subscribe((res: any) => {

      res.forEach(ele => {
        console.log("comp rating", ele.Rating);
        var newRating = Math.round(ele.Rating * 100);
        ele.Rating = (newRating / 100).toFixed(1);
        // console.log("newRating on search",newRating);
      });

      this.ratedCompanyList = res;
      ($('#exampleModal') as any).modal('show');

      this.ratedCompanyList.forEach(ele => {
        console.log("elements need  to check", ele.CompanyId, this.companyId == ele.CompanyId);
        if (this.companyId == ele.CompanyId) {
          console.log("rating of curr comp", ele.Company, ele.Rating, "currRat", ele.RatingByUser);
          console.log("RatingByUser", ele.RatingByUser);


          if (ele.RatingByUser == '1') {
            this.rate = 1;
            document.getElementById("btn1").style.color = "orange";

          }
          else if (ele.RatingByUser == '1' || ele.RatingByUser == '2') {
            this.rate = 2;
            document.getElementById("btn1").style.color = "orange";
            document.getElementById("btn2").style.color = "orange";
          }
          else if (ele.RatingByUser == '1' || ele.RatingByUserr == '2' || ele.RatingByUser == '3') {
            this.rate = 3;
            document.getElementById("btn1").style.color = "orange";
            document.getElementById("btn2").style.color = "orange";
            document.getElementById("btn3").style.color = "orange";
          }
          else if (ele.RatingByUser == '1' || ele.RatingByUser == '2' || ele.RatingByUser == '3' || ele.RatingByUser == '4') {
            this.rate = 4;
            document.getElementById("btn1").style.color = "orange";
            document.getElementById("btn2").style.color = "orange";
            document.getElementById("btn3").style.color = "orange";
            document.getElementById("btn4").style.color = "orange";
          }
          else if (ele.RatingByUser == '1' || ele.RatingByUser == '2' || ele.RatingByUser == '3' || ele.RatingByUser == '4' || ele.RatingByUser == '5') {
            this.rate = 5;
            document.getElementById("btn1").style.color = "orange";
            document.getElementById("btn2").style.color = "orange";
            document.getElementById("btn3").style.color = "orange";
            document.getElementById("btn4").style.color = "orange";
            document.getElementById("btn5").style.color = "orange";
          }

        }
        // $('#exampleModal').modal('hide');

      })

    }, (err) => console.log(err));
    // ( $('#exampleModal') as any).modal('hide');

  }
  // [Swati Katre]
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
      "ItemName": "Company",
      "ItemId": this.companyId,
      "Rating": this.rate
    }
    console.log("current comp id", this.companyId);

    this.apiService.companyRatings(objs).subscribe(data => {
      // this.savRatingsData =data;
      console.log("res", data);
      // this.alert=true;
      // $("#exampleModal .close").click()

      this.apiService.viewAllCompanyinfo(this.companyId).subscribe((res: any) => {
        console.log(res);
        this.companyData = res;

        this.newRating = Math.round(res.Rating * 100);
        this.newRating = (this.newRating / 100).toFixed(1);
      }, (err) => console.log(err))

    });
    // window.location.reload();
    // variab.reset();

  }
  closeModal() {
    document.getElementById("emailEnq").style.display = "none";
  }

  onMailSubmits(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
      var obj = {
        "UserId": this.userData.CompanyId,
        "CompanyId": this.companyData.CompanyId,
        "To_Email": this.companyData.Email,
        "From_Email": "dipaksahirav@gmail.com",
        "Subject": email.subject,
        "Body": email.message
      }
      this.http.post(
        "https://pharmaclick.co.in/listing/api/v1/SendMail",
        obj,
        { headers: headers }
      )
        .subscribe(response => {
          console.log("mail sent..", response);
        });
    }

  }

}