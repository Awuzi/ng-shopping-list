import {Component, OnInit} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {ApiService} from '../../services/ApiService/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl(),
    quantity: new FormControl(),
  });

  constructor(public apiS: ApiService, public list: ListComponent, public login: LoginComponent) {
  }

  ngOnInit(): void {
    this.addForm.reset();
  }

  addItem() {
    if (this.addForm.value.title !== null && !isNaN(Number(this.addForm.value.quantity)) && this.addForm.value.quantity !== null) {
      this.list.items.push({
        name: this.addForm.value.title,
        quantity: this.addForm.value.quantity,
      });
      this.apiS.postItem({
        name: this.addForm.value.title,
        quantity: this.addForm.value.quantity,
      }).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      this.addForm.reset();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }


}
