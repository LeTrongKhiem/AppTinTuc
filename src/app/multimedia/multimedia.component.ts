import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css','../domestic/domestic.component.css','../app.component.css']
})
export class MultimediaComponent implements OnInit {

  multimediaResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.service.multimediaApi().subscribe((result) => {
      // console.log(result);
      this.multimediaResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }

}
