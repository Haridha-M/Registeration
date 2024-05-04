import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { CanActivateFn } from '@angular/router';
import { authguard } from './auth.guard';
import { HeatmapComponent } from './heatmap/heatmap.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'verify',component:VerifyComponent},
  {path:'home',component:HomeComponent,
 canActivate:[authguard]
},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'heat',component:HeatmapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
