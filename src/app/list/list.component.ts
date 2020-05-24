import {Component, ElementRef, Input, OnInit} from '@angular/core';

import {ApiService} from '../../services/ApiService/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})


export class ListComponent implements OnInit {

  public items = [];
  public messageFlash: string; //for messageFlash

  constructor(private http: HttpClient, private api: ApiService, private router: Router) {
    //messageFlash
    /*    const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state as { messageFlash: string };
        this.messageFlash = state.messageFlash;*/
  }

  ngOnInit(): void {
    this.api.getItems().subscribe((items: any[]) => this.items = items);
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
