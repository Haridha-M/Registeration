import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { SignInData } from '../models/sign-in-data';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user: SignInData = new SignInData('', '');
  error: string = '';

  constructor(private service: ApiService, private router: Router) { }

  //create function named login
  login(form: NgForm) {
    console.log(form.value);
    this.service.login(form.value).subscribe({
      next: (data:any) => {
        console.log('data',data);
        this.router.navigate(['/home']);
        //stroe token in local storage
        localStorage.setItem('token',data.token);
      },
      error: (err) => {
        console.log('error',err.error);
        this.error = err.error.err;
      }
    });
  }
  clear() {
    this.error = '';
  }
  Fpwd() {
    this.router.navigate(['forgot-password']);
  }
}


