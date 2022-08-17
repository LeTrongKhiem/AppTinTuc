import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css','../app.component.css','../reponsiveCategory.css']

})
export class EducationComponent implements OnInit {
  giaoducResult : any = [];
  totalLength : any;
  page : number = 1;

  constructor(private service : NewsApiService) {
    this.getItems();
  }

  ngOnInit(): void {
  }
  getItems():void{
    this.service.giaoDucApi().subscribe((result) => {
      this.giaoducResult = result.items;
      this.totalLength = result.items.length;
      console.log(result);
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
