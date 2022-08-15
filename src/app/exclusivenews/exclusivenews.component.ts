import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-exclusivenews',
  templateUrl: './exclusivenews.component.html',
  styleUrls: ['./exclusivenews.component.css']
})
export class ExclusivenewsComponent implements OnInit {

  tinDocQuyenResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.docQuyen().subscribe((result) => {
      // console.log(result);
      this.tinDocQuyenResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }


}
