import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../commoncomponent/commoncomponent.component.css']
})
export class EducationComponent implements OnInit {
  giaoducResult : any = [];
  totalLenght : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.giaoDucApi().subscribe((result) => {
      this.giaoducResult = result.items;
      this.totalLenght = result.item.length;
      console.log(result);
    })
  }

}
