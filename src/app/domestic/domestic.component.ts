import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css','../app.component.css']
})
export class DomesticComponent implements OnInit {
  thoiSuResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.thoiSu().subscribe((result) => {
      // console.log(result);
      this.thoiSuResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }



}
