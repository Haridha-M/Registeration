import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  errorMessage:string='';
  constructor(private service:ApiService) { }
  clear(){
    this.errorMessage='';
  }
  sentForgotPasswordLink(form:NgForm){
    console.log(form.value);
    if(form.invalid){
      this.errorMessage='Please enter email';
      return;
    }
    if(form.value.email===''){
      this.errorMessage='Please enter email';
      return;
    }
    this.service.forgotPassword({email:form.value.email}).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.errorMessage='check your email to reset your password'
      },
      error:(err)=>{
        console.log(err);
        this.errorMessage=err.error.err;
      }
    })
  }
}
