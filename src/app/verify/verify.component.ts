import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  private token: string
  constructor(private route: ActivatedRoute,private router: Router, private service: ApiService) {
    this.token = this.route.snapshot.queryParamMap.get('token')!;
  }
  ngOnInit(): void {
    this.service.verify(this.token).subscribe((data)=>{
      console.log(this.token,'\n',data);
      this.router.navigate(['/login']);
    });
  }
}

