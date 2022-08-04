import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css','../app.component.css']
})
export class DomesticComponent implements OnInit {
  thoiSuResult: any = [];
  thoiSuResult1: any = [];
  thoiSuResult2: any = [];
  totalLength:any;
  page:number=1;
  number = Math.floor(Math.random() * 10) + 1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
    this.getItems1();
  }
  getItems1():void{
    this.service.thoiSuQuocte().subscribe((result) => {
      // console.log(result);
      this.thoiSuResult1 = result.items;
      this.thoiSuResult2 =this.thoiSuResult1.concat(this.thoiSuResult);
      console.log("item1",this.thoiSuResult2)
      this.totalLength = this.thoiSuResult2.length;
    })
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
