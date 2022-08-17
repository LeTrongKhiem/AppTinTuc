import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-idealsoflife',
  templateUrl: './idealsoflife.component.html',
  styleUrls: ['./idealsoflife.component.css','../reponsiveCategory.css','../app.component.css']
})
export class IdealsoflifeComponent implements OnInit {

  lyTuongSongResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.lyTuongSongApi().subscribe((result) => {
      // console.log(result);
      this.lyTuongSongResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }

  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
