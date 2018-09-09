import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  toDoList: {};
  constructor(
    private db: {
      "1": { title: "go to gym"; isMarked: false };
      "2": { title: "go to work"; isMarked: false };
    }
  ) {}

  getToDoList() {
    this.toDoList = this.db;
    return this.toDoList;
  }

  addItem(title) {
    let db = Object.values(this.toDoList);
    this.toDoList[db.length] = { title: title, isMarked: false };
  }

  toggleMark($key, flag) {
    this.toDoList[$key].isMarked = flag;
  }

  removeItem($key) {
    delete this.toDoList[$key];
  }
}
