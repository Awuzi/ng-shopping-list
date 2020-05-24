import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(this.API_URL);
  }

  postItem(item: object) {
    return this.http.post(this.API_URL, item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  deleteItem(item: object) {
    return this.http.post(`${this.API_URL}/delete`, item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }


  updateItem(item: object) {
    return this.http.post(`${this.API_URL}/update`, item).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  register(credentials: object) {
    console.log("credential: " + credentials);
    return this.http.post(`${this.API_URL}/register`, credentials).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
