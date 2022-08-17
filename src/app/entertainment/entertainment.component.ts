import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css', '../app.component.css','../reponsiveCategory.css']

})
export class EntertainmentComponent implements OnInit {
  giaitriResult : any = [];
  totalLength : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.giaiTriApi().subscribe((result) => {
      this.giaitriResult = result.items;
      this.totalLength = result.items.length;
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
