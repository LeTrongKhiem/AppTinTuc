import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-straighttalk',
  templateUrl: './straighttalk.component.html',
  styleUrls: ['./straighttalk.component.scss', '../commoncomponent/commoncomponent.component.css','../app.component.css']
})
export class StraighttalkComponent implements OnInit {

  noiThangResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.noiThang().subscribe((result) => {
      // console.log(result);
      this.noiThangResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
}
