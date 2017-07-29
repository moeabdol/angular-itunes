import { Injectable } from '@angular/core';
// import { Http } from "@angular/http";
import { Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { SearchItem } from "./search-item";

@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];
  loading: boolean;

  constructor(private jsonp: Jsonp) {
    this.results = [];
    this.loading = false;
  }

  search(term: string): Observable<SearchItem[]> {
    const url = `${this.apiRoot}?term=${term}&media=music&limit=20
      &callback=JSONP_CALLBACK`;
    return this.jsonp.request(url)
      .map(res => {
        return res.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      });
  }
}
