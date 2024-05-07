import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

    
    constructor(private router: Router,){

  }

  LogOut(){
  //   this.authservice.logout();
  //   this.router.navigate(['/login'])

  }
  home(){
      this.router.navigate(['dash/home'])

  }
  blog(){
      this.router.navigate(['dash/blog'])

  }
  create(){
    this.router.navigate(['dash/create'])
  }



}
