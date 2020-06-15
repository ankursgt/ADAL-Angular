import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  profile: any;

  constructor(private adalService: AdalService, protected http: HttpClient) { } 

  ngOnInit() {

    this.user = this.adalService.userInfo;

    console.log(this.user);
    
  }

  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }

  getProfile() {
    console.log('Get Profile called');
    return this.http.get("https://graph.microsoft.com/v1.0/me");
  }

  profileClicked() {
    this.getProfile().subscribe({
      next: result => { 
        console.log('Profile Response Received');
        this.profile = result;
      }
    });
  }

  logout() {
    this.adalService.logOut();
  }
}
