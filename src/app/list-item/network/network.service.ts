import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class NetworkService {
  toDoList: { [key: string]: any };

  constructor(private http: HttpClient) {}

  getToDoList() {
    return this.http.get<any[]>("http://localhost:8080/todos").pipe(
      map(data => {
        var object = {};
        for (let i = 0; i < data.length; i++) {
          object[data[i].id] = data[i];
        }
        this.toDoList = object;
        return object;
      })
    );
  }

  addItem(title) {
    let db = Object.values(this.toDoList);
    this.toDoList[db.length] = {
      id: db.length,
      title: title,
      checked: false
    };
  }

  toggleMark(key, flag) {
    console.log(key, flag);
    this.toDoList[key].checked = !flag;
  }

  removeItem(key) {
    delete this.toDoList[key];
    console.log(this.toDoList);
  }
}
