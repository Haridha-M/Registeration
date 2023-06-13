import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInData } from './models/sign-in-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //verify api 
  verify(token:string){
    return this.http.put('http://localhost:3000/verify',{token:token});
  }
  //login api
  login(data:SignInData){
    return this.http.post('http://localhost:3000/login',data);
  }

  //signup api
  signUp(data:any){
    return this.http.post('http://localhost:3000/signup',data);
  }

  //forgot password api
  forgotPassword(data:any){
    return this.http.post('http://localhost:3000/forgotpassword',data);
  }

  //reset password api
  resetPassword(data:any){
    console.log( data);
    return this.http.put('http://localhost:3000/resetpassword',data);
  }
  IsLoggedIn(){ 
    return !!localStorage.getItem('token');
  }
}