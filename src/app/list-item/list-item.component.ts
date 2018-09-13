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

  constructor(private networkServices: NetworkService) {}

  ngOnInit() {
    this.networkServices.getToDoList().subscribe(data => {
      this.toDoList = data;
      this.toDoList.sort((a, b) => {
        return a.checked - b.checked;
      });
    });
  }

  addItem(title) {
    // this.networkServices.addItem(title.value);
    this.toDoList.push({
      id: "khar",
      description: title.value,
      checked: false
    });
    title.value = null;
  }

  toggleMark(key: string, checked) {
    // this.networkServices.toggleMark(key, checked);
  }

  removeItem(key) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id === key) {
        this.toDoList.splice(i, 1);
      }
    }
  }
  // this.networkServices.removeItem(key);
}
