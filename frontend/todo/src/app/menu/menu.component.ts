import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private basicAuthenticationService 
    : BasicAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.basicAuthenticationService.isUserLoggedIn();
  }

}
