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
import { HealthComponent } from './health/health.component';
import { EducationComponent } from './education/education.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { ArtComponent } from './art/art.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DomesticComponent,
    HealthComponent,
    EducationComponent,
    LawyerComponent,
    ArtComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
