
import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css','../app.component.css','../reponsiveCategory.css']
})
export class DomesticComponent implements OnInit {
  thoiSuResult: any = [];
  totalLength:any;
  page:number=1;
  number = Math.floor(Math.random() * 10) + 1;
  constructor(private service: NewsApiService) {

  }
  ngOnInit(): void {
    this.getItems();
  }

  getItems():void{
    this.service.thoiSu().subscribe((result) => {
      this.thoiSuResult = result.items;
      this.totalLength = result.items.length;
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
