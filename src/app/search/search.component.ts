import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText;
  enpoint;
  searchResult = [];
  loading = true;

  constructor(private http: HttpClient) {
    this.searchText = "react hooks";
    this.enpoint = "https://hn.algolia.com/api/v1/search";
   }

  ngOnInit() {
    this.search();
  }

  clear(){
    this.searchText = "";
    this.searchResult = [];
  }

  search(){
    this.loading = true
    this.searchResult = [];
    this.http.get(this.enpoint + "?query=" + this.searchText).subscribe(searchResponse=>{
      console.log(searchResponse['hits']);
      searchResponse['hits'].forEach(hit => {
        this.loading = false;
        this.searchResult.push({
          "title": hit['title'],
          "author": hit['author'],
          "url": hit['url'],
          "highlightText": hit['_highlightResult']['title']['value'],
          "created":  hit['created_at']
        })
      });
      console.log(this.searchResult);
    })
  }


}
