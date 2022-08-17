import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css','../app.component.css','../reponsiveCategory.css'],
})
export class LawyerComponent implements OnInit {
  phapluatResult : any = [];
  totalLength : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.phapluatApi().subscribe((result) => {
      this.phapluatResult = result.items;
      this.totalLength = result.items.length;
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
