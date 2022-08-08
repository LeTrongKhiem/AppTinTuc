import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth2 : any;
  @ViewChild('loginGG', {static:true}) loginElement!:ElementRef;
  constructor() { }

  /*------------------------------------------
  --------------------------------------------
  About
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {

    this.googleAuthSDK();
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  callLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleAuthUser:any) => {

        let profile = googleAuthUser.getBasicProfile();
        console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        /* Write Your Code Here */

      }, (error:any) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  googleAuthSDK() {

    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '72023525219-ldr5ss039fenmdlvmcgh0rihsrrhipj0.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.callLoginButton();
      });
    }

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement('script');
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }
  // loginForm!: FormGroup;
  // socialUser!: SocialUser;
  // isLoggedin?: boolean;
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private socialAuthService: SocialAuthService
  // ) {}
  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });
  //   this.socialAuthService.authState.subscribe((user) => {
  //     this.socialUser = user;
  //     this.isLoggedin = user != null;
  //     console.log(this.socialUser);
  //   });
  // }
  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  // logOut(): void {
  //   this.socialAuthService.signOut();
  // }
}
