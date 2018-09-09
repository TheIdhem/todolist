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
    this.toDoList = Object.values(this.networkServices.getToDoList());
    this.toDoList.sort((a, b) => {
      return a.isMarked - b.isMarked;
    });
  }

  addItem(title) {
    this.networkServices.addItem(title.value);
    title.value = null;
  }

  toggleMark(key: string, isMarked) {
    this.networkServices.toggleMark(key, isMarked);
  }

  removeItem(key) {
    this.networkServices.removeItem(key);
  }
}
