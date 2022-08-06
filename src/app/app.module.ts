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
import {NgxPaginationModule} from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForeignComponent } from './foreign/foreign.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { HealthComponent } from './health/health.component';
import { EducationComponent } from './education/education.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { ArtComponent } from './art/art.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { CommoncomponentComponent } from './commoncomponent/commoncomponent.component';
import { ListNewsSearchComponent } from './list-news-search/list-news-search.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { RightCateloryComponent } from './right-catelory/right-catelory.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DomesticComponent,
    ForeignComponent,
    ScrollToTopComponent,
    HealthComponent,
    EducationComponent,
    LawyerComponent,
    ArtComponent,
    EntertainmentComponent,
    CommoncomponentComponent,
    RegisterComponent,
    LoginComponent,
    ListNewsSearchComponent,
    SearchComponent,
    NewsDetailComponent,
    RightCateloryComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
