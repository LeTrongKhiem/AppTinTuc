import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.scss', '../commoncomponent/commoncomponent.component.css','../app.component.css']
})
export class RealestateComponent implements OnInit {

  diaOcResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.service.diaOcApi().subscribe((result) => {
      // console.log(result);
      this.diaOcResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })

  }
  getItems():void{
    this.service.diaOcApi().subscribe((result) => {
      // console.log(result);
      this.diaOcResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
}
