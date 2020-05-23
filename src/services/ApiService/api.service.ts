import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_URL: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(this.API_URL);
  }

  postItem(item: Object) {
    return this.http.post(this.API_URL, item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  deleteItem(item : Object) {
    return this.http.post(this.API_URL+"delete", item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }


  updateItem(item : Object) {
    return this.http.post(this.API_URL+"update", item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
