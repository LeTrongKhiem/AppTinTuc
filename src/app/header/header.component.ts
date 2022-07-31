import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  router : Router) { }

  ngOnInit(): void {
  }
  enteredSearchValue: string = '';
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  search(){
    this.router.navigate(['/search',this.enteredSearchValue]);
  }
}
