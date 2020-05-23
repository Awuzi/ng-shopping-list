import {Component, ElementRef, Input, OnInit} from '@angular/core';

import {ApiService} from '../../services/ApiService/api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})


export class ListComponent implements OnInit {

  public items = [];

  constructor(private http: HttpClient, private api: ApiService, private elements: ElementRef) {
  }

  ngOnInit(): void {
    this.api.getItems().subscribe((items: any[]) => {
      this.items = items;
    });
  }

  checkItem(item) {
    this.api.updateItem(item);
    item.isDone = !item.isDone;
  }

  deleteItem(item) {
    /*delete from db*/
    this.api.deleteItem(item);
    /*delete table row*/
    this.items.splice(this.items.indexOf(item), 1);
  }

}
