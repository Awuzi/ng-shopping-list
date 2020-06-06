import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ApiService} from '../../services/ApiService/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private apiS: ApiService, private route: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.registerForm.reset();
  }

  register() {
    this.apiS.register({
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
    }).subscribe((res: any) => {
      if (res.isUserFind) {
        this.route.navigate(['/login']).then((redirection) => {
          redirection ? this.openSnackBar(res.message, res.status) : null;
        });
      }
      this.openSnackBar(res.message, res.status);
      this.registerForm.reset();
    });
  }


  openSnackBar(message: string, status?: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: status
    });
  }
}
