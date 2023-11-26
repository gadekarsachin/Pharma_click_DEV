import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';
  dataArr: any = [];
  emailData: any;
  sendLinkForm: FormGroup;

  Email: any;
  insertForm: any;
  Emails: any;
  userName: any;
  // Message: any;
  alert: boolean;
  constructor(private apiService : ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // this.Email = new FormControl('', [Validators.required, Validators.email]);
    // this.insertForm = this.formBuilder.group({
    //   Email: this.Email
    // });

    // this.sendLinkForm = this.formBuilder.group({
    //   Id: new FormControl(),
    //   UserName: new FormControl('')
    // })

    let tokens = localStorage.getItem('token');
    var s = JSON.parse(tokens);
      this.dataArr.push(s);
      console.log("currently login user id",this.dataArr[0].CompanyId);
      // console.log("current user id",this.dataArr[1]);

    
    // this.apiService.forgotPassword(this.dataArr[0].CompanyId).subscribe((res:any)=>{
    //   this.emailData=res; 
    // }
    
  }

  onClickForgotPassword() {    
    
        let userInfo = {
          "Username": this.userName,
          "To_Email": this.Email
        }
        console.log(userInfo);
    this.apiService.forgotPassword(userInfo).subscribe(res => {
      this.alert = true;
      
      this.emailData=res;
      console.log("wrong email");

      if(res == 'E-mail queued and sent sucessfully'){
        // alert('Success! Please check your email for password reset instructions.');
        $('#forgotPassCard').html('');
        $('#forgotPassCard').append(
        "<div class='alert alert-success show'>" +
        '<strong>Success!</strong> Please check your email for password reset instructions' +
        '</div>'
      );
      }

    }, (err => {
      console.log("err",err);
      if(err.error.Message == 'Registered email not matched' || err.error.Message == 'User not found') {
        $('#errors').html('');
        $('#errors').append(
        "<div class='alert '>" +
        '<strong>Username or registered email is not matching..!</strong>' +
        '</div>'
        );
      }
    }));
    // this.Email = '';
  }

  closeAlert(){
    this.alert=false;
  }

  userNames(e: any){
    this.userName = e.target.value;
    // console.log("userName",this.userName)

  }

  FPass(e: any){
    // console.log(e.target.value);
    // this.userName = e.target.vlue;
    this.Email = e.target.value;
  }
  
}