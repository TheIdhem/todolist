import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ListItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
