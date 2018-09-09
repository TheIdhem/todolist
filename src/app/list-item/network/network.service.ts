import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  toDoList: { [key: string]: any };

  constructor() {}

  getToDoList() {
    this.toDoList = {
      "1": { key: "1", title: "go to gym", isMarked: false },
      "2": { key: "2", title: "go to work", isMarked: false }
    };
    return this.toDoList;
  }

  addItem(title) {
    let db = Object.values(this.toDoList);
    this.toDoList[db.length] = {
      key: db.length,
      title: title,
      isMarked: false
    };
  }

  toggleMark(key, flag) {
    this.toDoList[key].isMarked = !flag;
  }

  removeItem(key) {
    delete this.toDoList[key];
    console.log(this.toDoList);
  }
}
