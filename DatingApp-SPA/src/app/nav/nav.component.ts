import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.loggin(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log('Failed to logg in');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  loggout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
