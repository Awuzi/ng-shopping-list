import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/ApiService/api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})


export class ListComponent implements OnInit {

  public items = [];

  constructor(private http: HttpClient, private apiS: ApiService) {
  }

  ngOnInit(): void {
    this.apiS.getItems().subscribe((response: any) => {
      this.items = response.items;
    });
  }

  checkItem(item) {
    this.apiS.updateItem(item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    item.isDone = !item.isDone;
  }

  deleteItem(item) {
    /*delete from db*/
    this.apiS.deleteItem(item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    /*delete table row*/
    this.items.splice(this.items.indexOf(item), 1);
  }

}
