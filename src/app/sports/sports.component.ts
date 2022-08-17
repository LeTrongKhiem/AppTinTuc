
import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {AppComponent} from "../app.component";
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css','../reponsiveCategory.css','../app.component.css']
})
export class SportsComponent implements OnInit {

  theThaoResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.theThaoApi().subscribe((result) => {
      this.theThaoResult = result.items;
      this.totalLength = result.items.length;
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
