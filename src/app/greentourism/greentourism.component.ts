import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-greentourism',
  templateUrl: './greentourism.component.html',
  styleUrls: ['./greentourism.component.css']
})
export class GreentourismComponent implements OnInit {

  duLichXanhResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.duLichXanhApi().subscribe((result) => {
      // console.log(result);
      this.duLichXanhResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }

}
