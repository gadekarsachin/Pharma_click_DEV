import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/modules/shared/services/api.service';
// import { Socket } from 'socket.io-client';


declare const facebookConnectPlugin: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  myForm: any;
  inputValue: any;
  maildata: any;

  constructor(private router: Router, private fb: FormBuilder, private apiSer: ApiService) {

    if (localStorage.getItem('token')) {
      this.router.navigate(['/homepage']);
    } else {
      // this.router.navigate(['/auth/login']);
    }

    window.addEventListener("exit", function () {
      (navigator as any).app.exitApp();
    });
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

    localStorage.removeItem('token');

    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required]],
      accepted1: [false, Validators.requiredTrue]

    });


    $(function () {

      $('.eye').click(function () {

        if ($(this).hasClass('fa fa-eye-slash')) {

          $(this).removeClass('fa fa-eye-slash');

          $(this).addClass('fa fa-eye');

          $('#pass').attr('type', 'text');

        } else {

          $(this).removeClass('fa fa-eye');

          $(this).addClass('fa fa-eye-slash');

          $('#pass').attr('type', 'password');
        }
      });
    });





    let chk1: any;
    chk1 = localStorage.getItem('chkbx');

    if (chk1 == 'on') {
      let user = localStorage.getItem('usrname');
      let pass = localStorage.getItem('pass');
      this.myForm.patchValue({
        'username': user,
        'password': pass
        // 'accepted1':false
      });
      console.log("ture", this.myForm.value.username);
      //  document.getElementById("username").innerHTML= "ram";

    }
    else {
      console.log("false");
    }

    $(function () {

      if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        $('#username').val(localStorage.usrname);
        $('#pass').val(localStorage.pass);
      } else {
        $('#remember_me').removeAttr('checked');
        $('#username').val('');
        $('#pass').val('');
      }

      $('#remember_me').click(function () {

        if ($('#remember_me').is(':checked')) {
          // save username and password
          localStorage.usrname = $('#username').val();
          localStorage.pass = $('#pass').val();
          localStorage.chkbx = $('#remember_me').val();
        } else {
          localStorage.usrname = '';
          localStorage.pass = '';
          localStorage.chkbx = '';
        }
      });
    });

  }

  signInFB() {
    console.log("fb");
    facebookConnectPlugin.login(['email'], function (response) {
      alert("logged In");
      alert(JSON.stringify(response.authResponse));
    }, function (error) {
      alert(error);
    });

  }

  // saveData()
  // {
  //   let mailtxt;
  //   let passtxt;
  //    mailtxt=(document.getElementById('email') as any).value;
  //    passtxt=(document.getElementById('pass') as any).value;
  //    console.log(mailtxt,passtxt);

  //     // document.cookie="email"+mailtxt+"path=http://localhost:4200/auth/login";
  //     // document.cookie="pass"+passtxt+"path=http://localhost:4200/auth/login";


  // }

  onSubmitForm() {

    console.log(this.myForm.value);
    this.isSubmitted = true;
    this.apiSer.login(this.myForm.value.username, this.myForm.value.password).subscribe((res: any) => {
      console.log(res);
      if (res !== null) {
        console.log("valid user");
        let token
        token = res;
        console.log(token.Username);
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('token1', JSON.stringify(token));
        if (sessionStorage.getItem('redirectUrl') !== 'null') {

          const redirectUrl = sessionStorage.getItem('redirectUrl') || '/homepage';
          // console.log("this is data::", sessionStorage.getItem('redirectUrl'))
          // console.log("......d.....d...rred....:", redirectUrl)
          this.router.navigateByUrl(redirectUrl);

        } else {
          this.router.navigate(['/homepage']);
        }

      }
      else {
        document.getElementById('warning').style.display = "block";
        console.log("invaliduser");
      }
    }, (err) => console.log(err));


  }

  get f() {
    return this.myForm.controls;
  }


  signIn() {
    window['plugins'].googleplus.login(
      {
        'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        // 'webClientId': '521276623139-gsd9akaitthe89em1lne1sjf0tvppn6v.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      },
      function (obj) {
        alert(JSON.stringify(obj)); // do something useful instead of alerting
      },
      function (msg) {
        alert('error: ' + msg);
      }
    );
  }
  signUp() {
    this.router.navigate(['/auth/register']);
  }
}
