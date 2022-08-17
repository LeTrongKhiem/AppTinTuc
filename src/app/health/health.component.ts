import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {AppComponent} from "../app.component";
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css', '../app.component.css','../reponsiveCategory.css']
1
})
export class HealthComponent implements OnInit {
  suckhoeResult : any = [];
  totalLength : any;
  page : number = 1;
  constructor(private service : NewsApiService) {
    this.getItems();
  }
  ngOnInit(): void {
  }
  getItems():void{
    this.service.sucKhoeApi().subscribe((result) => {
      this.suckhoeResult = result.items;
      this.totalLength = result.items.length;
      console.log(result);
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

}
