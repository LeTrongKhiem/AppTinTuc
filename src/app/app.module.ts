import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {NewsApiService} from "./Service/news-api.service";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { DomesticComponent } from './domestic/domestic.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { WomenComponent } from './women/women.component';
import { GreentourismComponent } from './greentourism/greentourism.component';
import {RealestateComponent} from "./realestate/realestate.component";
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import {NgxPaginationModule} from "ngx-pagination";
import { IdealsoflifeComponent } from './idealsoflife/idealsoflife.component';
import { StraighttalkComponent } from './straighttalk/straighttalk.component';
import { ExclusivenewsComponent } from './exclusivenews/exclusivenews.component';
import { MarketComponent } from './market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DomesticComponent,
    RealestateComponent,
    SportsComponent,
    TechnologyComponent,
    WomenComponent,
    GreentourismComponent,
    ScrollToTopComponent,
    IdealsoflifeComponent,
    StraighttalkComponent,
    ExclusivenewsComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
