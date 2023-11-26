import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Location } from '@angular/common';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { Profile } from 'src/app/shared/profile';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dataArr = [];
  profileData: any;
  EditProfile: boolean = false;
  arr = [];
  CompanyId: any;
  public editProfileForm : FormGroup;
  profileDataValue: boolean = false;
  profileDataValueImage: boolean = false;
  selectedFile: File = null;
  base64textString : any;
  profilePicData: any;
  getImg: any;
  profileName: any;

  constructor(private apiSer: ApiService, private location: Location,
    private formBuilder: FormBuilder,private route:ActivatedRoute, private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.editProfileForm = this.formBuilder.group({
    Id: new FormControl(),
    UserName: new FormControl(''),
    UserImage: new FormControl(''),
    UserDesignation: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    EditProfile: new FormControl(''),
    CurrentPosition: new FormControl(''),
    Industry: new FormControl(''),
    Education: new FormControl(''),
    Location: new FormControl(''),
    ContactInformation: new FormControl(''),
    Website: new FormControl('')
    })

    let tokens = localStorage.getItem('token');
    var s = JSON.parse(tokens);
      this.dataArr.push(s);
      this.profileData = JSON.parse(localStorage.getItem('token'));
      this.profileName = this.profileData.FirstName +" "+this.profileData.LastName;

      console.log("currently login user id",this.profileName);
    
    this.apiSer.viewProfile(this.dataArr[0].CompanyId).subscribe((res:any)=>{
      this.profileData=res; 
      
      this.apiSer.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res:any)=>{
        // this.profilePicData=res;
        // this.base64textString = res.FileContents; 
        
        this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);

        // console.log("userImg",res.FileContents);
      })
      
      this.editProfileForm.patchValue({
      Id: res.Id,
      // UserImage: res.FileContents,
      UserImage: res.UserImage,
      UserDesignation:res.UserDesignation,
      Email: res.Email,
      Phone: res.Phone,
      EditProfile: res.EditProfile,
      CurrentPosition: res.CurrentPosition,
      Industry: res.Industry,
      Education: res.Education,
      Location: res.Location,
      ContactInformation: res.ContactInformation,
      Website: res.Website
      });

    },(err)=>console.log(err));
    this.base64textString == this.editProfileForm.value.UserImage;


//     document.addEventListener("backbutton", onBackKeyDown, false);  
// function onBackKeyDown(e) { 
//  history.go(-1);
// (navigator as any).app.backHistory();
// }


   
  }

  updateProfileData(){
    this.profileDataValue = false;
    console.log("need to check",this.profileDataValue);
    
    this.apiSer.updateProfileD(this.editProfileForm.value).subscribe(result => {
      console.log("update profile result",result);
      // this.editProfileForm.patchValue({
      //   EditProfile: true
      // }) 

    }); 
}
  goBack(){
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate(['/home/product/category']);
    // this.location.back();
    window.history.go(-1); 
    return false;
  }

  onClickEdit(){
    // this.profileData.forEach(element => {
    //   console.log(this.profileData);
    //   element.EditProfile = false;
    // });
    this.profileDataValue = true;

}
// ------------------

onUploadChange(evt: any) {
  
  const file = evt.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
  }
  this.profileDataValueImage = true;
  this.editProfileForm.patchValue({
    UserImage : this.base64textString
  });
  
  
  setTimeout(() => {

    var fullBaseString = this.base64textString.length;
  console.log("",this.base64textString.length);
  var lenOfImg;
  for(let i=0; i< fullBaseString; i++)
  {
    if(this.base64textString[i]===','){
      lenOfImg = i;
    }
  }
  var convertedToBaseString = this.base64textString.substring(lenOfImg+1,this.base64textString.string);
  // console.log(convertedToBaseString);

  var objs = {
    "UserId": this.dataArr[0].CompanyId,
    "imageString": convertedToBaseString
  }
  console.log(objs);
  this.apiSer.updateProfilePic(objs).subscribe(result => {

    this.apiSer.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res:any)=>{
      this.profilePicData=res;
      // this.base64textString = res.FileContents; 
      this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64 || data:image/jpg;base64, ${res}`);

      // this.getImg ="data:{{this.base64textString.ContentType}};base64textString,{{this.base64textString.FileContents}}";
 
      // console.log("userImg",this.getImg);
    })
  
  });


}, 2000 );
  }


handleReaderLoaded(e) {
  this.base64textString = 'data:image/png;base64,' + btoa(e.target.result);
}

}


  





















































 
