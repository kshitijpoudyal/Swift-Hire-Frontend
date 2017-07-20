import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchResult: EventEmitter<any>;

  public searchQuery;
  public category;
  public location;
  public minFees;
  advancedSearch: boolean = false;

  constructor(public searchService: SearchService) {
    this.searchResult = new EventEmitter();
  }

  ngOnInit() {
  }

  keyPressed(event) {
    if (event.code === "Enter") {
      this.searchService.searchJobs(this.searchQuery, this.category, this.location, this.minFees).subscribe(data => {
        this.searchResult.emit(data);
      });
    }
  }

  toggle() {
    this.advancedSearch = !this.advancedSearch;
  }

}
