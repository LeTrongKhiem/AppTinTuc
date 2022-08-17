import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css','../domestic/domestic.component.css','../app.component.css','../reponsiveCategory.css']
})
export class UnionComponent implements OnInit {

  congDoanResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.service.congDoanApi().subscribe((result) => {
      // console.log(result);
      this.congDoanResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
