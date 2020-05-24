import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NavigationExtras, Router} from '@angular/router';

import {ApiService} from "../../services/ApiService/api.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public succesRegistrationMessage: NavigationExtras = {state: {messageFalsh: 'Correctly registered ;)'}}

  public registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private api: ApiService, private route: Router) {
  }

  ngOnInit(): void {
    this.registerForm.reset();
  }

  register() {
    this.api.register({
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
    });
    this.route.navigate(['/'], this.succesRegistrationMessage).then(r => console.log(r));
  }
}
