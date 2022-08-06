import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";
import {forkJoin} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-news-search',
  templateUrl: './list-news-search.component.html',
  styleUrls: ['./list-news-search.component.css', 'grid.css']
})
export class ListNewsSearchComponent implements OnInit {
  tiemkiemResult: any = [];

  hide: boolean = false;
  totalLength: any;
  page: number = 1;

  constructor(private service: NewsApiService,private  router : Router) {
  }

  ngOnInit(): void {
    this.getItems();
  }





  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;

  }

  getItems(): void {
    const thoiSu = this.service.thoiSu();
    const thoiSuQuocte = this.service.thoiSuQuocte();
    const congnghe = this.service.congNgheApi();
    const congDoan = this.service.congDoanApi();
    const banDoc = this.service.banDocApi();
    const giaoDuc = this.service.giaoDucApi();
    const giaiTri = this.service.giaiTriApi();
    const kinhTe = this.service.kinhTeApi();
    const phapluat = this.service.phapluatApi();
    const phuNu = this.service.phuNuApi();
    const thiTruong = this.service.thiTruongtApi();
    const duLichXanh = this.service.duLichXanhApi();
    const sucKhoe = this.service.sucKhoeApi();
    const docQuyen = this.service.docQuyen();
    const noiThang = this.service.noiThang();
    forkJoin([thoiSu, thoiSuQuocte, congnghe, congDoan, banDoc, giaoDuc, giaiTri, kinhTe, phapluat, phuNu, thiTruong, duLichXanh, sucKhoe, docQuyen, noiThang]).subscribe((result) => {
      this.tiemkiemResult = result[0].items.concat(
        result[1].items.concat(
          result[2].items.concat(
            result[3].items.concat(
              result[4].items.concat(
                result[5].items.concat(
                  result[6].items.concat(
                    result[7].items.concat(
                      result[8].items.concat(
                        result[9].items.concat(
                          result[10].items.concat(
                            result[11].items.concat(
                              result[12].items.concat(
                                result[13].items.concat(
                                  result[14].items.concat(


            )))))))))))))));

      //inclues the result of all the api

      // this.totalLength = this.tiemkiemResult.length;

      console.log(this.totalLength);

    })


  }
  replaceAll(str:string, search:string, replacement:string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
