import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {ApiService} from '../../services/ApiService/api.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  public username: string;

  constructor(public login: LoginComponent, public apiS: ApiService) {
  }

  ngOnInit(): void {
    this.username = this.apiS.getUsername().username;
    console.log(this.username);
  }

  logout() {
    this.login.logout();
  }

}
