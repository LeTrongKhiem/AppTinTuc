import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsApiService} from "../Service/news-api.service";
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import cheerio from "cheerio"
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css','../app.component.css','../reponsiveCategory.css']
})
export class NewsDetailComponent implements OnInit {
  @ViewChild('divID')
  divID!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('sapoDetail') sapoDetail!: ElementRef;
  url:SafeResourceUrl='';
  constructor(private route:ActivatedRoute, private  service:NewsApiService,public sanitizer:DomSanitizer) {
    route.params.subscribe( val => {
      let id = this.route.snapshot.params['detail'];
      let resultDetail1 = id.replaceAll('?','/')
      this.getHtmlData(resultDetail1);
      console.log(resultDetail1)
    })
  }
  resultDetail1:any;
  resultDetail:any;
  ngOnInit(): void {
    //   this.route.paramMap.subscribe(params => {
    //   this.resultDetail = params.get('link');
    //   this.getHtmlData(this.resultDetail);
    // });
    // this.resultDetail1 = this.resultDetail.replaceAll('?','/')
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.resultDetail1);

  }
  getHtmlData(parameter: string) {
    const cheerio = require('cheerio')
    this.service.getDataHtml(parameter).then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      this.divID.nativeElement.innerHTML = $('.body-detail .body-content .content-news-detail').html();
      this.title.nativeElement.innerHTML = $('.body-detail .body-content .title-content').html();
      this.sapoDetail.nativeElement.innerHTML = $('.body-detail .body-content .sapo-detail').html();
      // this.css.nativeElement.innerHTML = $('').html();
     console.log(this.divID.nativeElement.innerHTML)
    })
  }

}
