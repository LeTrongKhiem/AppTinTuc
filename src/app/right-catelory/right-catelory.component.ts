import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-right-catelory',
  templateUrl: './right-catelory.component.html',
  styleUrls: ['./right-catelory.component.scss','../app.component.css']
})
export class RightCateloryComponent implements OnInit {
  lastestNews: any =[]  ;
  constructor(private service: NewsApiService) { }

  ngOnInit(): void {
  this.getItems();

  }
  getItems():void{
    this.service.latestNews().subscribe((result)=>{
      this.lastestNews = result.items;
    })
  }
 replaceAll(str:string, search:string, replacement:string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

 }

