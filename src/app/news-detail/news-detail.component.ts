import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsApiService} from "../Service/news-api.service";
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css','../app.component.css','../reponsiveCategory.css']
})
export class NewsDetailComponent implements OnInit {


  url:SafeResourceUrl='';
  constructor(private route:ActivatedRoute, private  service:NewsApiService,public sanitizer:DomSanitizer) {

  }
  resultDetail1:any;
  resultDetail:any;
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.resultDetail = params.get('link');
    });
    this.resultDetail1 = this.resultDetail.replaceAll('?','/')
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.resultDetail1);

  }


}
