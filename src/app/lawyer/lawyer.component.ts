import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css', '../commoncomponent/commoncomponent.component.css','../reponsiveCategory.css'],
})
export class LawyerComponent implements OnInit {
  phapluatResult : any = [];
  totalLenght : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.phapluatApi().subscribe((result) => {
      this.phapluatResult = result.items;
      this.totalLenght = result.item.length;
      console.log(result);
    })
  }
}
