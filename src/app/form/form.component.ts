import {Component, OnInit} from '@angular/core';
import {ListComponent} from "../list/list.component";
import {ApiService} from "../../services/ApiService/api.service";
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor(public api: ApiService, public list: ListComponent) {
  }

  ngOnInit(): void {
    this.addForm.reset();
  }

  addItem() {
    if (this.addForm.value.title !== null && this.addForm.value.quantity !== null) {
      this.list.items.push({
        name: this.addForm.value.title,
        quantity: this.addForm.value.quantity,
      });
      this.api.postItem({
        name: this.addForm.value.title,
        quantity: this.addForm.value.quantity,
      });
    } else {
      alert('Veuillez remplir tous les champs.')
    }
  }


}
