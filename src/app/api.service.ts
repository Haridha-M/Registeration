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
    return this.http.put('http://localhost:3000/user/verify',{token:token});
  }
  //login api
  login(data:any){
    return this.http.post('http://localhost:3000/user/login',data);
  }

  //signup api
  signUp(data:any){
    return this.http.post('http://localhost:3000/user/signup',data);
  }

  getAll(){
    return this.http.get('http://localhost:3000/user/getAll');
  }
  getAllMasters(){
    return this.http.get('http://localhost:3000/user/getAllMasters');
  }

    //signup api
    submit(data:any){
      return this.http.post('http://localhost:3000/user/submit',data);
    }

  //forgot password api
  forgotPassword(data:any){
    return this.http.post('http://localhost:3000/user/forgotpassword',data);
  }

  //reset password api
  resetPassword(data:any){
    console.log( data);
    return this.http.put('http://localhost:3000/user/resetpassword',data);
  }
  IsLoggedIn(){ 
    return !!localStorage.getItem('token');
  }
}