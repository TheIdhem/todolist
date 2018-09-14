import { Component, OnInit } from "@angular/core";
import { NetworkService } from "./network/network.service";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
  providers: [NetworkService]
})
export class ListItemComponent implements OnInit {
  toDoList: any[];
  id: String;

  constructor(private networkServices: NetworkService) {}

  ngOnInit() {
    this.networkServices.getToDoList().subscribe(data => {
      if (data.length != 0) this.toDoList = data;
      else this.toDoList = [];
      this.sortToDoList();
    });
  }

  addItem(title) {
    this.networkServices.addItem(title.value).subscribe(
      val => {
        this.toDoList.push({
          id: val.id,
          description: title.value,
          checked: false
        });
        this.sortToDoList();
        title.value = null;
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      }
    );
  }

  toggleMark(key: string, checked, description) {
    this.networkServices.toggleMark(key, checked, description).subscribe(
      val => {
        for (let i = 0; i < this.toDoList.length; i++) {
          if (this.toDoList[i].id === key) {
            this.toDoList[i].checked = !checked;
          }
        }
        this.sortToDoList();
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {}
    );
  }

  sortToDoList() {
    this.toDoList.sort((a, b) => {
      return a.checked - b.checked;
    });
  }

  removeItem(key) {
    this.networkServices.removeItem(key).subscribe(
      val => {},
      response => {
        // console.log("DELETE call in error", response);
      },
      () => {}
    );
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id === key) {
        this.toDoList.splice(i, 1);
      }
    }
  }
}
