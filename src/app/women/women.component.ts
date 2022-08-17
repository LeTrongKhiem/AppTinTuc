import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css','../domestic/domestic.component.css','../app.component.css']
})
export class WomenComponent implements OnInit {

 phuNuResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.phuNuApi().subscribe((result) => {
      // console.log(result);
      this.phuNuResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
}
