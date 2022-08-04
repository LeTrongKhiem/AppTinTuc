import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css', '../commoncomponent/commoncomponent.component.css']
})
export class ArtComponent implements OnInit {
  nghethuatResult : any = [];
  totalLenght : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.giaiTriApi().subscribe((result) => {
      this.nghethuatResult = result.items;
      this.totalLenght = result.item.length;
      console.log(result);
    })
  }
}
