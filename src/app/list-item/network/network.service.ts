import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

const url = "http://localhost:8080/todos";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  toDoList: { [key: string]: any };

  constructor(private http: HttpClient) {}

  getToDoList() {
    return this.http.get<any[]>(url).pipe(
      map(data => {
        return data;
      })
    );
  }

  addItem(title) {
    return this.http.post<any>(
      url,
      {
        id: "",
        description: title,
        checked: false
      },
      httpOptions
    );
  }

  toggleMark(key, flag, description) {
    return this.http.put<any>(
      url,
      { id: key, checked: !flag, description },
      httpOptions
    );
  }

  removeItem(key) {
    return this.http.delete<string>(url + "/" + key, httpOptions);
  }
}
