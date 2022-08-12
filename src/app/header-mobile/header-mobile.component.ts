import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css','../app.component.css']
})
export class HeaderMobileComponent implements OnInit {
  showIpunSearch: boolean = false;
  showMenu: boolean = false;
  enteredSearchValue: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openInputSearch(){
    this.showIpunSearch = !this.showIpunSearch;
  }

  openMenu(){
    this.showMenu = !this.showMenu;
  }
  search(){
    this.router.navigate(['/search',this.enteredSearchValue]);
  }
}
