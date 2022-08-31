import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PM-Angular';
  constructor(public AuthGuard:AuthGuardService, private route:Router){

  }
  isLoggedOut(){
    this.AuthGuard.logout()
    this.route.navigate(['home'])
  }
}
