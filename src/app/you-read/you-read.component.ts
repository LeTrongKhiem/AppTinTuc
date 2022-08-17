import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-you-read',
  templateUrl: './you-read.component.html',
  styleUrls: ['./you-read.component.css','../domestic/domestic.component.css','../app.component.css','../reponsiveCategory.css']
})
export class YouReadComponent implements OnInit {

  banDocResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.service.banDocApi().subscribe((result) => {
      // console.log(result);
      this.banDocResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
