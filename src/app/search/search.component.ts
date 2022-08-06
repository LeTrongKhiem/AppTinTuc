import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  constructor(private  router : Router, private  ativatedRouter :ActivatedRoute) { }

  ngOnInit(): void {
    this.ativatedRouter.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
    });
  }
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange() {

    this.searchTextChanged.emit(this.searchTerm);
  }

  search(){
    this.router.navigate(['/search',this.searchTerm]);
  }
}
