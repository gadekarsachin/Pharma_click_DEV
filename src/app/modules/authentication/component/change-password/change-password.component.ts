import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/modules/shared/services/api.service';
// import { ValidatorService } from 'src/app/confirm-password.validator'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  updatePasswordForm: FormGroup;
  oldPassword: FormControl;
  newPassword: FormControl;
  cnewPassword: FormControl;
  dataArr: any = [];
  profileName: any;
  profileData: any;
  base64textString: any;

  constructor(private apiService: ApiService, private fb: FormBuilder,
    private location: Location, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    let tokens = JSON.parse(localStorage.getItem('token'));
    // var s = JSON.parse(tokens);
      this.dataArr.push(tokens);
      console.log("currently login user id",this.dataArr[0].CompanyId);
      this.profileData = JSON.parse(localStorage.getItem('token'));
      this.profileName = this.profileData.FirstName +" "+this.profileData.LastName;

    
    this.oldPassword = new FormControl('', [Validators.required]);
    // this.newPassword = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]);
    this.newPassword = new FormControl('',[ Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")])

    // this this.cnewPassword = new FormControl('', [Validators.required, this.validators.MustMatch(this.newPassword)])


      this.apiService.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res:any)=>{
        // this.base64textString = res.FileContents; 
        this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${res}`);
      });
  }

  cPass(e: any){
    console.log(e);
    this.newPassword = e.target.value;
  }

  changePass(){
    const resPass = {
      "CustomerId": this.dataArr[0].CompanyId,
      "NewPassword": this.newPassword
    }
    console.log(resPass);
    this.apiService.changePassword(resPass).subscribe(res => {
      console.log(res.toString().split(',').join(''));
      let result = res.toString().split(',').join('');
      if(result == 'Password Changed'){
        // alert('Success! Please check your email for password reset instructions.');
        $('#passChanged').html('');
        $('#passChanged').append(
        "<div class='alert alert-success show'>" +
        '<strong>Success!</strong>   Password changed successfully..!' +
        '</div>'
      );
      }
    })
  }

  goBack(){
    this.location.back();
    // window.history.go(-1); 
    // return false;
  }


}
