import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  token: string ;
  errorMessage: string = '';
  constructor(private route: ActivatedRoute,private router: Router,private service: ApiService) { 
    this.token = this.route.snapshot.queryParamMap.get('token')!;
  }
  resetPassword(form: NgForm) {
    let payload = { newPassword: form.value.newPassword,token:this.token }
    console.log(form.value);
    if (form.invalid) {
      this.errorMessage = 'Please enter password';
      return;
    }
    if (form.value.newPassword !== form.value.repeatPassword) {
      this.errorMessage = 'Password Miss Match';
      return;
    }
    this.service.resetPassword(payload).subscribe({
      next: (data: any) => {
        console.log(data);
        this.errorMessage = 'Password reset successfully';
      },
      error: (err:any) => {
        console.log(err);
        this.errorMessage = err.error.err;
      }
    })
  }
}
