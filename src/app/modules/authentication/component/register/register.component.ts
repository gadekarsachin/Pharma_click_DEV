import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormControl, ValidatorFn, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { ConfirmPasswordValidator } from "src/app/confirm-password.validator";
// import { Isd } from 'src/app/shared/isd';
import * as ISD from 'src/assets/ISD.json'


// function passwordMatchValidator(password: string): ValidatorFn {
//   return (control: FormControl) => {
//     // console.log(control)
//     if (!control || !control.parent) {
//       return null;
//     }
//     return control.parent.get(password).value === control.value ? null : { mismatch: true };
//   };
// }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // separateDialCode = false;
	// SearchCountryField = SearchCountryField;
	// CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
	// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	// phoneForm: FormGroup;
  // MobileNumber: any;

  // _jsonURL = 'src/assets/ISD.json'

  IsdCodes: any = (ISD as any).default;
  isd: any;

  constructor(private router: Router,private locations: Location,private fb: FormBuilder,private apiSer:ApiService) { }

  isSubmitted:boolean= false;
  myForm:any;
  agree:boolean= false;

  ngOnInit(): void {

    console.log("jsonData", ISD);
    

    // this.phoneForm = new FormGroup({
    //   MobileNumber: new FormControl(undefined, [Validators.required])
    // });
    // console.log(this.MobileNumber);

    // window.addEventListener("exit", function () {
    //   (navigator as any).app.exitApp();
    // });
    
    // $('#accepted2').click(function () {
    //   if ($('#accepted2:checked').length == 1)
    //     $('#id_complete2').removeAttr('disabled');
    //   else
    //     $('#id_complete2').attr('disabled','disabled');
    // });

    this.myForm = this.fb.group({
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      userName: ['', [Validators.required]],
      MobileNumber:['',[ Validators.required, Validators.pattern(/^(\+|\d)[0-9]{7,16}$/)]],
      Email:['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      CompanyName:['',[Validators.required]],
      Designation:['',[Validators.required]],
      UserType:['User'],
      Password:['',[ Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      ConfirmPassword:['',[Validators.required]],
      accepted1: [false, Validators.requiredTrue]

      // ConfirmPassword:['',[Validators.required,passwordMatchValidator('Password')]]
      // acceptTerms: [false, Validators.requiredTrue]+
    },
    {
      validator: ConfirmPasswordValidator("Password", "ConfirmPassword")
    }
  );  
  
  $('.feat-btn').click(function(){
    $('.nav__links ul .feat-show').toggleClass("show");
    $('.nav__links .first').toggleClass("fa-solid fa-angle-right fa-solid fa-angle-down");
  });

//   document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady(){
//     document.addEventListener("backbutton", function(e) {
//         e.preventDefault();

//                 if(confirm("Do you want to exit ?")) {
//                   (navigator as any).app.exitApp();
//                 }
//     }, false);
// }

  }

  

  onSubmitForm(){
    console.log(this.myForm);
    console.log(this.myForm.value);

    this.myForm.value.MobileNumber = this.isd + this.myForm.value.MobileNumber;
    console.log(this.myForm.value.MobileNumber);
 
    this.isSubmitted= true;

    if (this.myForm.invalid) {
      console.log("invalid form");
      return;
  }else{
    console.log("valid form");
    this.apiSer.registration(this.myForm.value).subscribe((res:any)=>{
      console.log(res);
    },(err)=>console.log(err))

    this.router.navigate(['/auth/login']);

  }

  }

  get f(){
    return this.myForm.controls;
  }
  

  goBack(){
    // this.location.back();
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/auth/login']);
  }
  

  SignUP(){
    // this.router.navigate(['/home/company/details'])
    this.router.navigate(['/homepage'])
  }
  signIn(){
    this.router.navigate(['/auth/login'])
  }

  selectIsd(eve: any){
    this.isd = eve.target.value;
    console.log(this.isd);

  }
}
