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
      this.toDoList = Object.values(data);
      this.toDoList.sort((a, b) => {
        return a.checked - b.checked;
      });
    });
  }

  addItem(title) {
    this.networkServices.addItem(title.value);
    title.value = null;
  }

  toggleMark(key: string, checked) {
    this.networkServices.toggleMark(key, checked);
  }

  removeItem(key) {
    this.networkServices.removeItem(key);
  }
}
