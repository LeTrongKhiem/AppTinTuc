
import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {AppComponent} from "../app.component";
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  congNgheResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.congNgheApi().subscribe((result) => {
      // console.log(result);
      this.congNgheResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }

}
