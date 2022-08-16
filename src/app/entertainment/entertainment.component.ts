import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css', '../commoncomponent/commoncomponent.component.css','../app.component.css']
})
export class EntertainmentComponent implements OnInit {
  giaitriResult : any = [];
  totalLenght : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.giaiTriApi().subscribe((result) => {
      this.giaitriResult = result.items;
      this.totalLenght = result.item.length;
      console.log(result);
    })
  }

}
