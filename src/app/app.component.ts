import { Component } from "@angular/core";

import { SearchService } from "./search.service";
import { SearchItem } from "./search-item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private loading: boolean = false;
  private results: SearchItem[];

  constructor(private itunes: SearchService) { }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).subscribe(data => {
      this.loading = false;
      this.results = data;
    });
  }
}
