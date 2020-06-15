import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private adalService: AdalService) {

    

    
  }

  ngOnInit(){
    this.adalService.init(environment.config);
    this.adalService.handleWindowCallback();

    if(this.adalService.userInfo.authenticated){
      console.log("authenticated");
    }
    else{
      this.adalService.login();
    }
  }
}
