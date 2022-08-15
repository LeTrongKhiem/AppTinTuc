import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {AppComponent} from "../app.component";
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css', '../commoncomponent/commoncomponent.component.css','../app.component.css']
})
export class HealthComponent implements OnInit {
  suckhoeResult : any = [];
  totalLenght : any;
  page : number = 1;
  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.sucKhoeApi().subscribe((result) => {
      this.suckhoeResult = result.items;
      this.totalLenght = result.item.length;
      console.log(result);
    })
  }

}
